import React from 'react'
import {useState} from 'react'

export default function Form03onSubmit() {

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1>Form - best practices</h1>
      <form onSubmit={onSubmit}>
        <label>Title 3: </label>
        <br />
        <input 
          type="text" 
          id="title"
          onChange={onChange}
          value={title}
        />
        <br /><br />
        <label>Post 3: </label>
        <br />
        <input 
          type="text" 
          id="body" 
          onChange={onChange} 
          value={body}
        />
        <br /><br />

        <button type="submit">Upload post</button>

      </form>
    </>
  )
}
