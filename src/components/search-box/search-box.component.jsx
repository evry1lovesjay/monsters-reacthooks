import "./search-box.styles.css"

const SearchBox = ({value, onChangeHandler, placeholder, className}) => {
    return ( 
        <input
            className={`search-box ${className}`}
            type="search"
            value= {value} 
            onChange= {onChangeHandler}
            placeholder={placeholder}
        />
    );
}
 
export default SearchBox;