import { createContext , useState, useEffect} from "react";

//contains the default or actual values you want to access
export const FilteredMonstersContext = createContext();

export const SingleFilteredMonsterContext = createContext();

export const FilteredMonstersProvider = ({children}) => {
    const [monsters, setMonsters]= useState([]);
    const [filteredMonsters, setFilteredMonsters]= useState(monsters);
    const [input, setInput]= useState("");
    const value = {monsters, setMonsters, filteredMonsters, setFilteredMonsters, input,setInput}

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((users)=> setMonsters(users))
      }, [])
    
    
      useEffect(()=>{
        const newFilteredMonsters = monsters.filter((monster)=>(monster.name.toLowerCase().includes(input.toLowerCase())))
        setFilteredMonsters(newFilteredMonsters)
      }, [monsters, input])

    return <FilteredMonstersContext.Provider value={value}>
        {children}
        </FilteredMonstersContext.Provider>
}

export default FilteredMonstersContext