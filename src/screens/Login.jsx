import React from 'react'
import Background from '../components/Background'
import AuthHeader from '../components/AuthHeader'
import AuthCard from '../components/AuthCard'

function Login() {
  return (
    <Background>
      <AuthHeader/>
      <body className='authBody'>
        <AuthCard>
          <label htmlFor='loginEmail'>Email</label>
          <input type='email' id='loginEmail' placeholder='youremail@website.com'></input>
          <label htmlFor='loginPassword'>Password</label>
          <input type='password' id='loginPassword' placeholder='password'></input>
          <button type='submit' className='authButton'>Login</button>
          <button type='button' className='loginRegisterSwitch'>Don't have an account? register here.</button>
        </AuthCard>
      </body>
    </Background>
  )
}

export default Login