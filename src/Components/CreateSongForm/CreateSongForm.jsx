import React, { useState } from 'react';
import './CreateSongForm.css'

const CreateSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [running_time, setRunningTime] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            running_time: running_time
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
            <div className='container'>
                <div className='form-row'>
                    <div className='form-group col-lg-6 box'>
                        <label>Title</label>
                        <input type='title' value={title} onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div className='form-group col-lg-6 box'>
                        <label>Artist</label>
                        <input type='artist' value={artist} onChange={(event) => setArtist(event.target.value)} />
                    </div>
                </div> 
                <div className='form-row'>
                    <div className='form-group col-lg-6 box'>
                        <label>Album</label>
                        <input type='album' value={album} onChange={(event) => setAlbum(event.target.value)} />
                    </div>
                    <div className='form-group col-lg-6 box'>
                        <label>Release Date</label>
                        <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
                    </div>
                </div>
                <div className='form-row'>    
                    <div className='form-group col-lg-6 box'>
                        <label>Genre</label>
                        <input type='genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
                    </div>
                    <div className='form-group col-lg-6 box'>
                        <label>Running Time</label>
                        <input type='number' value={running_time} onChange={(event) => setRunningTime(event.target.value)} />
                    </div>
                </div>
            </div>
        <div className='but-container'>
            <button type='button' className="btn btn-primary btn-lg btn-block">
                Add Song
            </button>
        </div>
        </form>
     );
}
 
export default CreateSongForm;