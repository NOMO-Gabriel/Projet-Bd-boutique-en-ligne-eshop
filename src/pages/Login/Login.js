import React from 'react';
import Banner from '../../components/Banner/Banner';

import './Login.css'

const Login = () => {
    return (
        <div className='Login'>
        <div class="Login-container">
        <h2 class='Login-container-h2'>Connexion</h2>
        <form className="login-form" >
        <input
          type="text"
          placeholder="Nom d'utilisateur"/>
        <input
          type="password"
          placeholder="Mot de passe"
        />
        <button type="submit">Se connecter</button>
      </form>
        </div>
        </div>
        
    );
};

export default Login;