import React from 'react'
import AuthentificationContext from './AuthentificationContext';

export const Login = () => {
    return (
        <div className="Login">
            <header className="App-header">
                <AuthentificationContext.Provider value={[{isAuth: "it work ?"}, {isAuth: "yes it work !"}]}>
                    <button>Test</button>
                </AuthentificationContext.Provider>
            </header>
        </div>
    );
}
