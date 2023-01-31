import { useContext } from "react";

import Card from "../Card/card.component";

import "./card-list.styles.css"

import FilteredMonstersContext from "../../contexts/filteredMonsters.context";

import SingleFilteredMonstersContext from "../../contexts/filteredMonsters.context";

const CardList = () =>{
    const {filteredMonsters} = useContext(FilteredMonstersContext)
        return ( 
                <div className="card-list">
                    {filteredMonsters.map((filteredMonster)=> (
                    <SingleFilteredMonstersContext.Provider value={{filteredMonster}}>
                    <Card />
                    {/* <Card filteredMonster = {filteredMonster}/> */}
                    </SingleFilteredMonstersContext.Provider>
                    ))}
                </div>
)}
 
export default CardList;