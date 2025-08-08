
// import React from 'react';
// import Backgroundimage from './Backgroundimage';
// import styled from 'styled-components'

// function Signup() {
//   return (
//     <Container>
//         <Backgroundimage></Backgroundimage>
//         <div className='content'>
//             <div className='body flex column a-center j-center'>
//         <div className='text flex colum'>
//             <h1>Unlimited movies, TV shows and more</h1>
//             <h4>Watch anywhere. Cancel anytime.</h4>
//             <h6>Ready to watch? Enter your email to create or restart membership</h6>
//         </div>
//         <div className='form'>
//             <input type="email" placeholder='Email Address' name="email"/>
//             <input type="password" placeholder='Password' name="password" />
//             <button>Get Started</button>
    
//         </div>
//         <button>Log In</button>
//     </div>
//         </div>
         
    
//  </Container>
    
              
//   );
// }

// const Container = styled.div`
//   position:relative;
//   .content{
//   position:absolute;
//   top:0;
//   left:0;
//   background-color:rgba(0,0,0,0.5);
//   height:100vh;
//   width:100vw;
//   display:grid;
//   grid-template-rows:15vh 85vh;
//   }
// `

// export default Signup;

import {createUserWithEmailAndPassword} from "firebase/auth";
import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Backgroundimage from './Backgroundimage';
import styled from 'styled-components';
import Header from './Header'
import {firebaseAuth} from "../utils/firebase-config";
import {onAuthStateChanged} from "firebase/auth";

function Signup() {
    const [showPassword, setShowPassword]=useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues]= useState({
        email:"",
        password:"",
    });

    const handleSignIn = async () =>{
      try{
        const {email,password} = formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password)

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
    <Container showPassword={showPassword}>
      <Backgroundimage />
      <div className="content">
        <Header login/>
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
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
               {showPassword ? (
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
    ):(
             
                    <button onClick={()=> setShowPassword(true)}>Get Started</button>
              )}
            
          </div>
          <button onClick={handleSignIn} className="login-btn">Sign Up</button>
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

