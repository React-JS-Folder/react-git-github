import {useState} from 'react';

function AppToggle() {
  const [toggle, setToggle] = useState(false);

  const turnOnOff = () => setToggle( prevState => !prevState);

  return (
    <>
      <button onClick={ () => turnOnOff() } > click </button>
      <p>{toggle ? "ON" : "OFF"}</p>

    </ > 
  );
}

export default AppToggle;
