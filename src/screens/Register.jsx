import React, {useState} from 'react'
import Background from '../components/Background'
import AuthHeader from '../components/AuthHeader'
import AuthCard from '../components/AuthCard'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [allfieldsFilled, setAllFieldsFilled ] = useState(true)
  const [passwordSymbol, setPasswordContainsSymbol] = useState(true)
  const [passwordLowerLetter, SetPasswordLowerLetter] = useState(true)
  const [passwordUpperLetter, SetPasswordUpperLetter] = useState(true)
  const [passwordLength, setPasswordLength] = useState(true)
  const [passwordNumber, setPasswordNumber] = useState(true)

  const handleUpdatePassword1 = (event) => {
    setPassword1(event.target.value)
  }
  const handleUpdatePassword2 = (event) => {
    setPassword2(event.target.value)
  }
  const handleUpdateEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleLoginRegisterSwitch = () => {
    navigate("/login")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (email && password1 && password2) {
      if (email.includes(".")) {
      setEmail("")
      setPassword1("")
      setPassword2("")
      navigate("/decks")
      }
    } else{
      setEmail("")
      setPassword1("")
      setPassword2("")
    }
  }
  return (
    <Background>
      <AuthHeader/>
      <body className='authBody'>
        <AuthCard handleSubmit={handleSubmit}>
          <label htmlFor='registerEmail'>Email</label>
          <input type='email' id='registerEmail' value={email} onChange={handleUpdateEmail} placeholder='youremail@website.com'></input>
          <label htmlFor='registerPassword'>Password</label>
          <input type='password' id='registerPassword'value={password1} onChange={handleUpdatePassword1} placeholder='password'></input>
          <label htmlFor="reenterPassword">Re-enter Password</label>
          <input type="password" id="reenterPassword" value={password2} onChange={handleUpdatePassword2} placeholder='re-enter password'/>
          {allfieldsFilled ? "" : <p className='RegistrationError'>All inputs must be filled in</p>}
          {passwordsMatch ? "" : <p className='RegistrationError'>Passwords must match</p>}
          {passwordLength ? "" : <p className='RegistrationError'>Password must be at least 8 characters long</p>}
          {passwordLowerLetter ? "" : <p className='RegistrationError'>Password must include a lowercase letter</p>}
          {passwordUpperLetter ? "" : <p className='RegistrationError'>Password must include an uppercase letter</p>}
          {passwordNumber ? "" : <p className='RegistrationError'>Passwords must include a number</p>}
          {passwordSymbol ? "" : <p className='RegistrationError'>Passwords must include one of these symbols: !@#)$%^&*(</p>}

          <button type='submit' className='authButton'>Register</button>
          <button type='button' className='loginRegisterSwitch' onClick={handleLoginRegisterSwitch}>Already have an account? login here.</button>
        </AuthCard>
      </body>
    </Background>
  )
}

export default Register