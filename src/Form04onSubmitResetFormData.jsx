import React from 'react'
import {useState} from 'react'

export default function Form04onSubmitResetFormData() {

  const defaultData = {    //create default values to reset form after sending each post
    title: '',
    body: ''
  }

  const [formData, setFormData] = useState(defaultData);  //object properties goes to formData)
  

  const {title, body} = formData;

  const onChange = (e) =>
    setFormData( (prevState) => ({
      ...prevState, 
      [e.target.id]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultData);         /*after you send the post it will reset to default */
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
