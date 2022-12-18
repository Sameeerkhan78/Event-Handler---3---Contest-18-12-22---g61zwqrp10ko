import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
   // use console.log
    const id = event.target.id;
    console.log("Button id is:-" +id);
  }

  // do not change id of input elements
  return (
    <div id="main">
     
          <button id="button-a" onclick={handleClick }>Button A </button>
          <button id="button-b" onclick={handleClick }>Button B </button>
   
    </div>
  )
}


export default App;
