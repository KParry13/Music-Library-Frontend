
const DisplayMusicTable = (props) => {
    console.log(props.searchQuery)
    let filteredSongs = props.songs.filter(entry => (
        entry.title.toLowerCase().includes(props.searchQuery.toLowerCase()) || 
        (entry.artist.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (entry.album.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (entry.genre.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (entry.release_date.includes(props.searchQuery))
    ))
    console.log(filteredSongs)
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
            <tbody >
                {filteredSongs.map((entry, index) =>{
                    return (
                        <tr key={index} className="table-striped">
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