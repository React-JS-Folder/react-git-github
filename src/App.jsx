import React from 'react'
import {useState} from 'react';
import CalculationOverview from './components/CalculationOverview';
import MultipliedByTwo from './components/MultipliedByTwo';
import MultipliedCalculations from './components/MultipliedCalculations';
import Input from './Input';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h2>Add here all the components as lego blocks</h2>


      <Input setInputValue={setInputValue}/>
     
     <CalculationOverview>
       <MultipliedCalculations>
         <MultipliedByTwo inputValue={inputValue} />
       </MultipliedCalculations>
     </CalculationOverview>
    </div>
  )
}
