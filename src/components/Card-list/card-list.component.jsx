import { useContext } from "react";

import Card from "../Card/card.component";

import "./card-list.styles.css"

import FilteredMonstersContext from "../../contexts/filteredMonsters.context";

import SingleFilteredMonstersContext from "../../contexts/filteredMonsters.context";

const CardList = () =>{

    //this FilteredMonstersContext below will give us back the value stored inside value when the
//context was created....
    const {filteredMonsters} = useContext(FilteredMonstersContext)
        return ( 
                <div className="card-list">
                    {filteredMonsters.map((filteredMonster, id)=> (
                    <SingleFilteredMonstersContext.Provider value={{filteredMonster}}>
                    <Card />
                    </SingleFilteredMonstersContext.Provider>
                    ))}
                </div>
)}
 
export default CardList;