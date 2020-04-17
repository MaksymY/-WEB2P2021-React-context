import React from 'react'
import AuthentificationContext from './AuthentificationContext';

export const Log = () => {
    const { isAuth, changeAuth } = React.useContext(AuthentificationContext)
    return (
        <>
            <h1>Authentificateur</h1>
            <div>
                <h1>
                    {isAuth ? "your are authentificated" : "oh no !"}
                </h1>
                <button onClick={ e => changeAuth(!isAuth)}></button>
            </div>
        </>
    );
}
