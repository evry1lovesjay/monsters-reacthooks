import { createContext } from "react";

//contains the default or actual values you want to access
export const FilteredMonstersContext = createContext(null);

export const SingleFilteredMonstersContext = createContext(null);

export default FilteredMonstersContext
// //The provider is the actual component
// export const FilteredMonstersProvider = ({children}) => {
//     const [currentFilteredMonsters, setCurrentFilteredMonsters]= useState(null)
//     const value = {}
//     return <FilteredMonstersContext.Provider value={value}>{children}</FilteredMonstersContext.Provider>
// }