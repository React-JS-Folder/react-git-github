import React from 'react'


export default function Component_A(props) {
  const {name, id} = props;

  console.log(props);

  
  return (
    <div>
      <h1>Hello Montana!</h1>
      <h2>
        {`${name} is a variable I created in Component A and ${id} is a variable I created in Component A`} 
      </h2>

    </div>
  )
}
