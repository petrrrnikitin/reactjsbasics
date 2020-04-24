import React from "react";

export default props => (
    <div style={{border: '1px solid #ccc',marginBottom: '10px', display: 'block', padding: '10px'}}>
        <h2>{props.name}</h2>
        <p>Year: {props.year}</p>
        <input onChange={props.onChangeName} value={props.name} type="text"/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)