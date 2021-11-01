import React from 'react'
import {useState} from 'react';
import axios from 'axios';

const defaultFormData = {
  title: '',
  body: ''
}

export default function FetchData_setData() {
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const {title, body} = formData;

  const onChange = (e) => {
    setFormData( (prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://jsonplaceholder.typicode.com/posts', 
        formData
      );
      setSuccess(true)
    } catch (error) {
      setError(true);
    }




    setFormData(defaultFormData);
  }

  return (
    <div>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label>Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>

      {success && <h3>Post uploaded correctly </h3>}
      {error && <h3>there was a error, post was not uploaded </h3>}
    </div>
  )
}
