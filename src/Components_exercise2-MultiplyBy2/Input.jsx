import React from 'react'

export default function Input(props) {
  const {setInputValue} = props;

 
  return (
    <div>
      <h3>this is input - exercise 2</h3>

      <label htmlFor="">Type a number to multiply by 2
        <input type="number" onChange={(e)=> setInputValue(e.target.value)} />
      </label>
    </div>
  )
}
