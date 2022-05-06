import React from "react";
import "./app-style/_searchBarComponent.scss"

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
    return (
        <form className= "search__bar">
         
            <input type="text" placeholder="Search" />
            <button type="submit">
                <AiOutlineSearch size = {22}/>
            </button>
        </form>        
    )
};

export default SearchBar;