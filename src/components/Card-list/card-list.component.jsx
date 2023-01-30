import Card from "../Card/card.component";

import "./card-list.styles.css"

const CardList = ({filteredMonsters}) =>( 
        <div className="card-list">
        {filteredMonsters.map((filteredMonster)=> (
            <Card filteredMonster = {filteredMonster} 
            />))}
        </div>
)
 
export default CardList;