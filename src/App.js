import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {
  const [songs, setSongs] = useState([])
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

  return (
    <div>
      <NavBar />
      <CreateSongForm addNewEntry={createSong} />
      <DisplayMusicTable songs={songs} />
      {/* {console.log("Songs From Database", songs)} */}
      
    
    </div>
  );
}

export default App;
