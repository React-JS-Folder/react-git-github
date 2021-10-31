import React from 'react'
import {useState} from 'react';

export default function Form02multipleInput() {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  const {title,body} = formData;

  const onChange = (e) => {
    setFormData( (prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value
    }))
  };



  return (
    <div>
      <h1>Form - React - useState with object</h1>

      <form>
        <label>Title: </label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange}/>
        <br /><br />

        <label>Body: </label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange}/>
        <br />

        <button type="submit">Upload post</button>





      </form>

    </div>
  );
}
