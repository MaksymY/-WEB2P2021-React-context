import React from 'react'
import AuthentificationContext from './AuthentificationContext';
import { Log } from "./Log"
export const Login = () => {
    return (
        <>
            <h1>Authentificateur</h1>
            <AuthentificationContext.Consumer>
                <Log/>
            </AuthentificationContext.Consumer>
        </>
    );
}
