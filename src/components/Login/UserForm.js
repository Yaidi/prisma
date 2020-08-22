import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthGoogle from './AuthGoogle';

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
        history.push('/Home')
        }
        )
        .catch((e) => {
            setError(e.message);
            setTimeout(() => {
                setError('')
            }, 1000)
        })
}
    return (
    <div id= {windowchoose}>
    <h1> {windowchoose} </h1>

    <form onSubmit={sendData}>

    {error && <div>{error}</div>}

    <input type='email' placeholder='Escribe tu correo' value={email} onChange={(e) => {
        setEmail(e.target.value)}}/>

    <input type='password' placeholder='escribe tu contrseña' value={password} onChange={(e) => {
setPassword(e.target.value)}}/>
        
        <button>Entrar</button>
    </form>

    <AuthGoogle/>

    <p>¿Ya tienes una cuenta?

   <Link to={hash}> inicia sesión </Link></p> 
    
    </div>
    );
}
export default UserForm  
