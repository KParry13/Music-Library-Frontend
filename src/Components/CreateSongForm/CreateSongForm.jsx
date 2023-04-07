import React, { useState } from 'react';

const CreateSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [running_time, setRunning_time] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre,
            running_time: running_time
        };
        console.log(newEntry);
        props.addNewEntry(newEntry);
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
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
                <input type='release date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre</label>
                <input type='genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
        </form>
     );
}
 
export default CreateSongForm;