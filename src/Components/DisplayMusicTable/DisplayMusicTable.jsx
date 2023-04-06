const DisplayMusicTable = (props) => {
    return (
        
        <table className="table">
            <thead>
                <tr>
                    
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
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
                            <td>{entry.release_date}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.like}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusicTable;