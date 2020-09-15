import React,{useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { register } from './serviceWorker';
import { auth } from "./firebase";

function Login() {

const history = useHistory();
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');

const signIn = e=>{
  e.preventDefault()
  auth
     .signInWithEmailAndPassword(email,password)
     .then(auth => {
         history.push("/")
       })
      .catch(error => alert(error.message))
}

const register = e=>{
    e.preventDefault()
    //some firebase login for register

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{ 
           //successfull created a user
           console.log(auth);
           if(auth){
               history.push("/")
           }
        })
        .catch(error => alert(error.message))
   }

    return (
        
        <div className="login">
            <Link to="/">
              <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
            </Link>

            <div className="login__container">
               <h1>Sign-in</h1>

              <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e =>(setEmail(e.target.value))}></input>
                <h5>Password</h5>
                <input type="text" value={password} onChange={e=>(setPassword(e.target.value))}></input>
                <button type="submit" onClick={signIn} className="login__signInButton" >Sign In</button>
              </form>

              <p>
               By signining-in you agree to the Amazon FAKE CLONE conditions of use & sale.Please see our privacy notice, our cookies notice
               and our Interest-Based Ads Notice.
              </p>
              <button onClick={register} className="login__registerButton"> Create your Amazon Account</button>
            </div>
         </div>
        
    )
}

export default Login
