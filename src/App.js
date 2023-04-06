import React, { useState } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';
import './App.css';


function App() {

  const [entries,setEntries] = useState([{title: '', artist: '', album: '', releaseDate: '', Genre: ''}])

  function createNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <CreateSongForm addNewEntry={createNewEntry} />
      <DisplayMusicTable entries={entries} />
    </div>
  );
}

export default App;
