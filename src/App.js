import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  const [songs, setSongs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data.songs);
  }
  
  async function createSong(newSong) {
    let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function deleteSong(songId) {
    let response = await axios.delete(`http://127.0.0.1:5000/api/songs/${songId}`);
    if(response.status === 204) {
      await getAllSongs();
    }
  }

  async function likeSong(songId) {
    let response = await axios.patch(`http://127.0.0.1:5000/api/songs_like/${songId}`);
    if(response.status === 200) {
      await getAllSongs();
    }
  }

  async function dislikeSong(songId) {
    let response = await axios.patch(`http://127.0.0.1:5000/api/songs_dislike/${songId}`);
    if(response.status === 200) {
      await getAllSongs();
    }
  }

  
  
  return (
    <div>
      <NavBar />
      <SearchBar setSearchQuery={setSearchQuery} />
      <CreateSongForm createSong={createSong} />
      <DisplayMusicTable songs={songs} searchQuery={searchQuery} deleteSong={deleteSong} likeSong={likeSong} dislikeSong={dislikeSong} />

    </div>
  );
}

export default App;
