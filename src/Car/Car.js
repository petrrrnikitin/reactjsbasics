import React from "react";

export default props => (
    <div>
        <h2>{props.name}</h2>
        <p>Year: {props.year}</p>
        {props.children}
    </div>
)