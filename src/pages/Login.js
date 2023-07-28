import React from 'react'
import './login.css'
import {auth,provider} from '../Firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
function Login({setIsAuth}) {
  let navigate=useNavigate()
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
      navigate("/")
    })
  }
  return (
    <div className='loginpage'>
      <div className='login'>
      <div className='im'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/753px-Google_%22G%22_Logo.svg.png' alt="Google"/>
      </div>
      <p>Sign In with Google to Continue</p>
      <div className='google-button'>
        <button className='login-buttongoogle' onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      </div>
    </div>
  )
}

export default Login
