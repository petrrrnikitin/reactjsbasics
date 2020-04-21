import React from 'react';
import './App.css';
import Car from "./Car/Car";

function App() {
  const divStyle = {
    textAlign: 'left',
    paddingLeft: '910px',
    paddingTop: '100px'
  }
  return (
    <div style={divStyle} className="App">
    <h1 style={{ fontSize: '50px', color: 'red'}}>Hello Sonya!</h1>
      <Car name='Ferrari 599' year={2020}><p style={{color: 'red'}}>COLOR</p></Car>
      <Car name='BMW M3 COUPE' year={2005}><p style={{color: 'black'}}>COLOR</p></Car>
      <Car name='TOYOTA GT 86' year={2015}><p style={{color: 'yellow'}}>COLOR</p></Car>
    </div>
  );
}

export default App;
