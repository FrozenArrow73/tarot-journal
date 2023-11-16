import React from 'react'
import Background from '../components/Background'
import AuthHeader from '../components/AuthHeader'
import AuthCard from '../components/AuthCard'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const handleLoginRegisterSwitch = () => {
    navigate("/login")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <Background>
      <AuthHeader/>
      <body className='authBody'>
        <AuthCard handleSubmit={handleSubmit}>
          <label htmlFor='registerEmail'>Email</label>
          <input type='email' id='registerEmail' placeholder='youremail@website.com'></input>
          <label htmlFor='registerPassword'>Password</label>
          <input type='password' id='registerPassword' placeholder='password'></input>
          <label htmlFor="reenterPassword">Re-enter Password</label>
          <input type="password" id="reenterPassword" placeholder='re-enter password'/>
          <button type='submit' className='authButton'>Register</button>
          <button type='button' className='loginRegisterSwitch' onClick={handleLoginRegisterSwitch}>Already have an account? login here.</button>
        </AuthCard>
      </body>
    </Background>
  )
}

export default Register