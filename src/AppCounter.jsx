import {useState} from 'react';

function AppCounter() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(prevState => prevState + 10);
    setCount(prevState => prevState + 20);
  }

  return (
    <>
      {/* <button onClick={ () => setCount(count + 1)}>Increase</button> */}

      {/* Counter  using prevState  */}
      <button onClick={ () => countIncrease() }>Increase</button>
      <p>{count}</p>

    </ > 
  );
}

export default AppCounter;
