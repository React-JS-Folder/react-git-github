import './App.css';

export default function AppConditionalRendering() {
  const welcomeTest = {
    admin: "Hi admin",
    shopManager: "Hi shop manager",
    customer: "Welcome customer",
    guest: "Welcome guest"
  };

  const user = {
    role: 'guest',
    name: 'Mitchel',
    isAuthenticated: true
  };

  const {role, isAuthenticated} = user;


  return (
    <>
      <h1>App</h1>
      <p className={isAuthenticated ? 'welcomeTextAuthed' : 'welcomeText'}> 
          {welcomeTest[role]}
      </p>
      
      {isAuthenticated && <button>Log in</button>}


    </>
  )
}
