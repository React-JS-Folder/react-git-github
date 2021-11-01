import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function FetchData_useEffect2_loading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    const fetchData = async ()  => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setData(response.data);
      setLoading(false)

    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      
      {data && data.map( (post) => {
        const {id,title, body} = post;
        return <article key={id}>
          <hr />
          <h1>Fetch data from a url</h1>
          <h3>{id}</h3>
          <h4>{title}</h4>
          <h4>{body}</h4>
          <hr />
        </article>
      })}


    </div>
  )
}
