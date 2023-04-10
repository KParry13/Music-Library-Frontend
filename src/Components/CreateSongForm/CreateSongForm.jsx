import React, { useState } from 'react';

const CreateSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [runningTime, setRunningTime] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: date,
            genre: genre,
            runningTime: runningTime
        };
        console.log(newSong);
        props.createSong(newSong);
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
        setRunningTime(0)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='title' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type='artist' value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album</label>
                <input type='album' value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date</label>
                <input type='date' value={date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre</label>
                <input type='genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div>
                <label>Running Time</label>
                <input type='number' value={runningTime} onChange={(event) => setRunningTime(event.target.value)} />
            </div>
            <button>
                Add Song
            </button>
        </form>
     );
}
 
export default CreateSongForm;