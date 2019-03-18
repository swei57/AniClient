import React from 'react';
import './searchbar.css';
 
const SearchBar = ({searchChange}) => {
    return(
         <div className = "p-2">
            {/* <img src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" alt=""/> */}
            <div className="test">
                <input className = "text-light searchbar" 
                type = "search" 
                placeholder ="search anime "
                onChange =  {searchChange}>
                </input> 
                <i className="searchIcon fas fa-search ml-3" aria-hidden="true"></i>
            </div>
         </div>
    );
}

export default SearchBar;