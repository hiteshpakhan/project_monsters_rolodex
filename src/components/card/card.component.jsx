import React from "react";

import "./card.style.css";

export const Card = (props) => (  
    // here remember you can skip the return if you use the simple brackets insted of the curly brackets
    <div className="card-container">
        <h1>{props.monster.name}</h1>
    </div>
)