//this FilteredMonstersContext below will give us back the value stored inside value when the
//context was created....
import { useContext } from "react";

import "./card.styles.css"

import SingleFilteredMonstersContext from "../../contexts/filteredMonsters.context";


const Card = () => {
    const {filteredMonster} = useContext(SingleFilteredMonstersContext)
    const {id, name, email}= filteredMonster;
    return (
        <div className="card-container" key={id}>
            <img 
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      );
}
 
export default Card;