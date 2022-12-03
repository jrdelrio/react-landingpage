import React from "react";
import Card from "./card.jsx";
import data from "../data.json";

const CardsGrid = () => {
    
    const jsonMap = data.map(element => (<Card image={element.image} title={element.title} description={element.description}/>));

	return (
		<div className="row col-xs-12 col-sm-12 col-md-12">
            {jsonMap}
        </div>    
)};

export default CardsGrid;
