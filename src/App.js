import React from 'react';
import AuthentificationContext from './AuthentificationContext';
import './App.css';
import { Login } from './Login'

function App() {
  return (
    <div className="App">
      <AuthentificationContext.Consumer>
      {
          value => 
          (
              value.map( s => <p> s.isAuth </p> )
          )
      }
      </AuthentificationContext.Consumer>
      <Login/>
    </div>
  );
}

export default App;
