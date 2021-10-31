import { useState } from 'react';


const AppForm2multipleInputs = () => {

  const[title, setTitle] = useState('');     //get input text  // e.target.value
  const[body, setBody] = useState('');       //get textarea    // e.target.value
  const[author, setAuthor] = useState('');   //get select      //e.target.value

  return (
    <div className="create">
      <h4>AppForms2multipleInputs Component -turn it on/off</h4>
      <h2>Add a New Blog</h2>
      <form>

        <label>Blog title:</label> <br />
        <input 
          type="text" 
          required
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
        /> <br /> <br />
 
        <label>Blog body:</label> <br />
        <textarea
          required
          value={body}
          onChange={ (e) => setBody(e.target.value)}
        ></textarea> <br /> <br />

        <label>Blog author:</label> <br />
        <select
          value={author}
          onChange={ (e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> <br /> <br />

        <button type="submit">Add Blog</button>





      </form>
      <h3>Show input value in browser</h3>
      <p> {title} </p>
      <p> {body} </p>
      <p> {author} </p>
    </div>
  )


}

export default AppForm2multipleInputs;
