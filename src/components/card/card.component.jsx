import React from "react";

export const Card = (props) => (  
    // here remember you can skip the return if you use the simple brackets insted of the curly brackets
    <div>
        <h1>{props.monster.name}</h1>
    </div>
)