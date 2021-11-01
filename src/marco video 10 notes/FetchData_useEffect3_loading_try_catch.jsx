import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function FetchData_useEffect3_loading_try_catch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect( () => {
    
    setLoading(true);
    const fetchData = async ()  => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/postsWRONG-URL');
  
        setData(response.data);
        setLoading(false);
        setError(false);
  
     } catch (error) {
        setLoading(false);
        setError(true); 
        console.log(error);
    }     
   }
    fetchData();

  }, []);




  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>sorry.... there was an error, try again later</h3>}
      
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
