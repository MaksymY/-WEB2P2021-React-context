import React from 'react';
import AuthentificationContext from './AuthentificationContext';
import './App.css';
import { Login } from './Login'

function App() {
  const [isAuth, changeAuth ] = React.useState( false )
  
  return (
    <div className="App">
      <AuthentificationContext.Provider value={{ isAuth, changeAuth }}>
          <Login/>
      </AuthentificationContext.Provider>
      <Login/>
    </div>
  );
}

export default App;
