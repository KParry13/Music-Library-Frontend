import React, { useState } from 'react';

const DisplayMusicTable = (props) => {
    
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th />
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Running Time</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((entry, index) =>{
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.release_date}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.running_time}</td>
                            <td>{entry.likes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusicTable;