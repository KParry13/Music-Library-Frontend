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
      createSong(response.data.newSong)
    }
  }

  
  
  return (
    <div>
      <NavBar />
      <SearchBar setSearchQuery={setSearchQuery}/>
      <CreateSongForm createSong={createSong} />
      <DisplayMusicTable songs={songs} searchQuery={searchQuery} />
      
      
    </div>
  );
}

export default App;
