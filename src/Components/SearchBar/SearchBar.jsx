import './SearchBar.css'
const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        // props.setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    
    return ( 
        <form onSubmit={(handleSubmit)}>
            <div className="container">
                <div>
                    <label>
                        <img src='icons8-search-20.png' alt='magnifying glass'></img>
                    </label>
                    <input 
                    type="text"
                    placeholder="Search"
                    onChange={(event)=>props.setSearchQuery(event.target.value)}  />
                </div>   
            </div>
        </form>
     );
}
 
export default SearchBar;