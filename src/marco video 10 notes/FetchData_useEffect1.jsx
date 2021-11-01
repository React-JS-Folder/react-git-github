import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData_useEffect1() {
  const [data, setData] = useState(null);


  useEffect( () => {

    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    }

    fetchPosts();

  }, []);


  return (
    <>
    {data && data.map( (post) => {
      const {id, title, body} = post;

      return <article key={id}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </article>
    })}
    </>
  )
}
