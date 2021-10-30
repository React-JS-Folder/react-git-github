import './App.css';

export default function AppConditionalRendering() {
  const user = {
    name: 'Mitchel',
    isAuthenticated: false
  }

  const {name, isAuthenticated} = user;


  return (
    <>
      <h1>App</h1>
      <p className={isAuthenticated ? 'welcomeTextAuthed' : 'welcomeText'}>
        Welcome, {isAuthenticated ? name : "Please log in"}
      </p>

      {!isAuthenticated && <button>Log in</button> }

    </>
  )
}
