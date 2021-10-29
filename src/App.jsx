
function App() {
  return (
    <>
      <button onClick={ () => console.log("Button was clicked")}>Click me!</button>
 
     <form>
       <input type="text" onChange={ (e) => console.log(e.target.value) } />
     </form>
    </ > 
  );
}

export default App;
