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
                    <input 
                    type="text"
                    placeholder="Search"
                    onChange={(event)=>props.setSearchQuery(event.target.value)} data-test="input"></input>
                    <label>
                        <img src='icons8-search-20.png' alt='magnifying glass'></img>
                    </label>
                </div>   
            </div>
        </form>
     );
}
 
export default SearchBar;