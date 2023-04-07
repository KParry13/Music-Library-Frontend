import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [entries,setEntries] = useState([{title: '', artist: '', album: '', releaseDate: '', Genre: ''}])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    console.log("Songs in database", response.data);
    
  }

  function createNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <CreateSongForm addNewEntry={createNewEntry} />
      <DisplayMusicTable entries={entries} />
    </div>
  );
}

export default App;
