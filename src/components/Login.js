import React from 'react'
import discord from '../assets/images/logo.png'
import { auth, provider } from '../firebase'
import { Button } from '@material-ui/core'
import '../assets/css/login.css'

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src={discord} alt='logo' />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
