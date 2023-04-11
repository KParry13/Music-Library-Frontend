
const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        // props.setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    
    return ( 
        <form onSubmit={(handleSubmit)}>
            <label>
                <img src='icons8-search-20.png' alt='magnifying glass'></img>
            </label>
            <input 
            type="text"
            placeholder="Search"
            onChange={(event)=>props.setSearchQuery(event.target.value)}  />
            
        </form>
     );
}
 
export default SearchBar;