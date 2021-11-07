import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  console.log(history);
  
  return (
    <div>
      <h1>Hello from Login</h1>

      <button onClick={ () => history.goBack() } > Go back to the page where you clicked the link</button>
    </div>
  )
}
