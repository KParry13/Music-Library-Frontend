import React, { useState } from 'react';

// const [like, setLike] = useState('inactive')
const DisplayMusicTable = (props) => {
    
    // function handleLike() {
    //     if(like === 'inactive'){
    //         setLike('teal')
    //     }
    //     else {
    //         setLike('inactive')
    //     }
    // }
    
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <id>Id</id>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Running Time</th>
                    <th>Like</th>
                </tr>
            </thead>
            <tbody>
                {props.entries.map((entry, index) =>{
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.releaseDate}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.runningTime}</td>
                            <td>{entry.like}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusicTable;