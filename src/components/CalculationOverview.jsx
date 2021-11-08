import React from 'react'
import MultipliedCalculations from './MultipliedCalculations'


export default function CalculationOverview({inputValue}) {
  return (
    <div>
      <h4>{inputValue}</h4>
      <MultipliedCalculations inputValue={inputValue} />
    </div>
  )
}
