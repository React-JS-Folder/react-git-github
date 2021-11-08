import React from 'react'

export default function Input({setInputValue}) {
  return (
    <div>
      <h4>this is component Input</h4>
      <input type="number" onChange={ (e) => setInputValue(e.target.value)} />
    </div>
  )
}
