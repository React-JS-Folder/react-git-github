import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Page404 from './components/Page404.js';

export default function App() {
  return (

    <Router>
      <h1>Webpage navigation</h1>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/Home0000' component={Home} />  {/* I typed the path wrong to test <Redirect */}
          <Route exact path='/About' component={About} /> 
          <Route exact path='/Contact' component={Contact} />
          <Route path='/Page404' component={Page404} />
          <Redirect to='/Page404' component={Page404} />
        </Switch>
      </div>


    </Router>
  )
}
