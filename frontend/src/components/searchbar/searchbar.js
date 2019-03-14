import React from 'react';
import './searchbar.css';
 
const SearchBar = ({searchChange}) => {
    return(
         <div className = "p-2">
         <input className = "text-light searchbar" type = "search" 
         placeholder ="search anime "
         onChange =  {searchChange}></input> 
         <i class="searchIcon fas fa-search ml-3" aria-hidden="true"></i>
         </div>
    );
}

export default SearchBar;