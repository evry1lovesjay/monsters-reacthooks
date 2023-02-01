import "./search-box.styles.css"

import {useContext } from 'react';
import FilteredMonstersContext from "../../contexts/filteredMonsters.context";


const SearchBox = ({value, onChangeHandler, placeholder, className}) => {
    const {input, setInput} = useContext(FilteredMonstersContext)

    // function to search monsters
    const onSearchChange =(e)=>{
        const val = e.target.value
        setInput(val)
    }

    return ( 
        <input
            className={`search-box ${className}`}
            type="search"
            value= {input} 
            onChange= {onSearchChange}
            placeholder={placeholder}
        />
    );
}
 
export default SearchBox;