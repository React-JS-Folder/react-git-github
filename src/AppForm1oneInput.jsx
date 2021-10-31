import { useState } from 'react';


const AppForm = () => {

  const[title, setTitle] = useState('');

  return (
    <div className="create">
      <h4>AppForm1oneInput Component -turn it on/off</h4>

      <h2>Add a New Blog</h2>
      <form>

        <label>Blog title:</label>
        <input 
          type="text" 
          required
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />






      </form>
      <h3>Show input value in browser</h3>
      <p> {title} </p>
    </div>
  )


}

export default AppForm;
