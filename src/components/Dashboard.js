import React from 'react'
import {useHistory} from 'react-router-dom';


export default function Dashbord() {
  const history = useHistory();
  const data = "Hello Mr Walkings";
  
  console.log(history);

  return (
    <div>
      <h1>Hello from Dashboard</h1>

      {/* <button onClick={ () => history.push('/login')} >Go to login</button> */}

      <button onClick={ () => history.push('/login', data)} > Go to login page</button>
    </div>
  )
}
