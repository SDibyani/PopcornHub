
import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Backgroundimage from './Backgroundimage';
import styled from 'styled-components';
import Header from './Header'
import {firebaseAuth} from "../utils/firebase-config";
import {onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";

function Signup() {

    const navigate = useNavigate();
    const [formValues, setFormValues]= useState({
        email:"",
        password:"",
    });

    const handleLogIn = async () =>{
      try{
        const {email,password} = formValues;
        await signInWithEmailAndPassword(firebaseAuth,email,password)

      } catch(err){
        console.log(err);

      }
    };

   // ✅ Redirect after successful signup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/home"); // or your homepage route
    });
    return () => unsubscribe(); // Clean up the listener
  }, [navigate]);
  return (
    <Container>
      <Backgroundimage />
      <div className="content">
        <Header />
        <div className="body">
          <div className="text">
            <h1>Login</h1>
           
          </div>
          <div className="form">
            <input 
            type="email" 
            placeholder="Email Address"
             name="email"
              value={formValues.email}
               onChange={(e)=>
               setFormValues({
                ...formValues,
               [e.target.name]: e.target.value,
            })
        }
                />
              
                  <input
                   type="password" 
                   placeholder="Password"
                    name="password"
                    value={formValues.password}
               onChange={(e)=>
               setFormValues({
                ...formValues,
               [e.target.name]: e.target.value,
            } )
        }
        />
      
          </div>
          <button onClick={handleLogIn} className="login-btn">Log In</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form input {
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
  }

  .form button {
    padding: 0.75rem;
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .login-btn {
    background: none;
    border: none;
    color: white;
    margin-top: 1rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Signup;

