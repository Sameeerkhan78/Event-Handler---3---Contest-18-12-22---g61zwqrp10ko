import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   // use console.log
    const id = event.target.id;
    console.log("Button id is:-" +id);
  }

  // do not change id of input elements
  return (
    <div id="main">
     
          <button id="button-a" onclick={handleInput }>Button A </button>
          <button id="button-b" onclick={handleInput}>Button B </button>
    <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} />
  
      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} />
      <br/>
    </div>
  )
}


export default App;
