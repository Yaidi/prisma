import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthGoogle from './AuthGoogle';
import Style from '../../styles/Login.module.css';

const choose = {
        Register: function register (email, password) {
           return firebase.auth().createUserWithEmailAndPassword(email, password)
       },
        Login: function login(email, password) {
           return firebase.auth().signInWithEmailAndPassword(email, password);
       }
}

const UserForm=({windowchoose, hash})=> {
     let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
function sendData (e) {
    e.preventDefault();
     choose[windowchoose](email, password)
        .then( () =>{
        history.push('/Menu')
        }
        )
        .catch((e) => {
            setError(e.message);
            setTimeout(() => {
                setError('')
            }, 4000)
        })
}
    return (
    <div id= {windowchoose}>
    <h1 className={`${Style.title}`}> ¡Bienvenida! </h1>
        <p className={`${Style.message}`} >
            {windowchoose === 'Login'? 
            'Inicia Sesión para continuar' : 'Regístrate'  }
        </p>
    <form onSubmit={sendData}>

    {error && <div className={`${Style.error}`} >{error}</div>}
       <div className={`mb-3`}>
    <input type='email' placeholder='Escribe tu correo' value={email} onChange={(e) => {
    setEmail(e.target.value)}} className={`form-control`} />
    </div>
    <div className={`mb-3`}>
    <input type='password' placeholder='Escribe tu contrseña' value={password} onChange={(e) => {
    setPassword(e.target.value)}} className={`form-control`} />
    </div>
    <button className={`btn btn-lg btn-block ${Style.btn}`} >
        {windowchoose === 'Login'? 'INICIAR SESIÓN' : 'REGISTRARME' }
    </button>
    </form>

    <AuthGoogle/>

    <p className={`row justify-content-center ${Style.change}`}>
        {windowchoose === 'Login'?
         '¿Aún no tienes una cuenta?' : '¿Ya tienes una cuenta?'}

   <Link to={hash} className={`row justify-content-center ${Style.link}`}>
   {windowchoose === 'Login'?
         'Regístrate' : 'Inicia sesión '}
        </Link>
        </p> 
    
    </div>
    );
}
export default UserForm;
