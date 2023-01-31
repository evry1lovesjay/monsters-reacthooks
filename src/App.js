import React from 'react';

import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/Card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import FilteredMonstersContext from './contexts/filteredMonsters.context';


const App = () => {

  const [monsters, setMonsters]= useState([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);
  const [input, setInput]= useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users)=> setMonsters(users))
  }, [])


  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>(monster.name.toLowerCase().includes(input.toLowerCase())))
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, input])

  // function to search monsters
  const onSearchChange =(e)=>{
    const val = e.target.value
    setInput(val)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Party</h1> 

        <SearchBox 
        className="monsters-search-box"
        value= {input}
        onChangeHandler= {onSearchChange}
        placeholder="search monsters"
        />

        <FilteredMonstersContext.Provider value={{filteredMonsters}}>
          {/* <CardList filteredMonsters={filteredMonsters} /> */}
          <CardList />
        </FilteredMonstersContext.Provider>
        
      </div>
  );
}

export default App;
