import React from 'react'
import {useState} from 'react';

import Component_A from './components_exercise1/Component_A.jsx'
import Input from './Components_exercise2-MultiplyBy2/Input.jsx';
import MultipliedByTwo from './Components_exercise2-MultiplyBy2/MultipliedByTwo.jsx';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const name = "kirk";
  const id = 300;

  return (
    <div>
      <h5>Exercise 1 - I made it before watching the tutorial</h5>
      <Component_A name={name} id={id}/>

      <br />
      <hr /> 
      <br />
      <h5>Exercise 2 - Multiply by 2</h5>

      <Input setInputValue={setInputValue}/>
      <MultipliedByTwo inputValue={inputValue}/>


  







    </div>
  )
}
