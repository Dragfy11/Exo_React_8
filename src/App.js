import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state={
    nombre: 1
  }

  render(){
    console.log(this.state.nombre)
    return (
      <div className="App">
      <h1 onMouseOver={(e)=>{console.log(e.target.innerHTML)}}>Exercice 8</h1>
      <button onClick={()=>{console.log("bonjour")}}>bouton 1 click</button>
      <br/>
      <br/>
      <button onDoubleClick={()=>console.log("bjr")}>bouton 2 click</button>
      <br/>
      <br/>
      <button onMouseOver={()=>{console.log("bonjour")}}>bouton over</button>
      <br/>
      <br/>
      <button onCopy={()=>{console.log("bonjour")}}> bouton copy</button>
      </div>
    );
  }
}

export default App;
