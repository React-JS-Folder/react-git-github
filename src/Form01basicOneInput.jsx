import React from 'react'
import {useState} from 'react'

export default function Form01basicOneInput() {

  const [formData, setFormData] = useState( {
    title: '',
    body: ''
  });

  const {title, body} = formData;

  const onChange = (e) =>
    setFormData( (prevState) => ({
      ...prevState, 
      [e.target.id]: e.target.value,
    }));



  return (
    <>
      <h1>Form - best practices</h1>
      <form>
        <label> </label>
        <br />
        <input 
          type="text" 
          id="title"
          onChange={onChange}
          value={title}
        />

        <button>Upload post</button>
      </form>
    </>
  )
}
