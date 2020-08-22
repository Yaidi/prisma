import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

function authSocialMedia (){
    const googleProvider =new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
}
const Auth = () =>{
  let history= useHistory();
    function google (e) {
        e.preventDefault();
        authSocialMedia().then( () =>{
            history.push('/Menu')
            }
            )
    }
//This is the template html
    return(
        <div>
   <p>O inicia sesión con</p>
    <img src={'hi'} className="btn" alt="googleLogin" onClick={google}/>
        </div>
    )

}
export default Auth
