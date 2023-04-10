import React, { useState } from 'react';

const SearchBar = (props) => {

    

    function handleSubmit(event) {
        event.preventDefault();
        // props.setSearchQuery(event.target.value)
        console.log(event.target.value)
    }

    
    return ( 
        <form onSubmit={(handleSubmit)}>
            <label>Search Songs</label>
            <input 
            type="text"
            placeholder="Search"
            onChange={(event)=>props.setSearchQuery(event.target.value)}  />
            
        </form>
     );
}
 
export default SearchBar;