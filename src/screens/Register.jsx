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
    const includesLower = /(?=.*[a-z])/
    const includesUpper = /(?=.*[A-Z])/
    const includesNumber = /(?=.*\d)/
    const includesSymbol = /(?=.*[!@#$%^&*-_=+.,?])/
    const lengthIsAtLeast8 = /(\w{3,})/
    let allTestsPass = false
    if (email && password1 && password2) {
      setAllFieldsFilled(true)
      allTestsPass = true
    }
    if (password1 === password2) {
      setPasswordsMatch(true)
      allTestsPass = true
    }
    if (includesLower.test(password1)) {
      SetPasswordLowerLetter(true)
      allTestsPass = true
    }
    if (includesUpper.test(password1)) {
      SetPasswordUpperLetter(true)
      allTestsPass = true
    }
    if (includesNumber.test(password1)) {
      setPasswordNumber(true)
      allTestsPass = true
    }
    if (includesSymbol.test(password1)) {
      setPasswordContainsSymbol(true)
      allTestsPass = true
    }
    if (lengthIsAtLeast8.test(password1)) {
      setPasswordLength(true)
      allTestsPass = true
    }
    // opposite
    if (!(email && password1 && password2)) {
      setAllFieldsFilled(false)
      allTestsPass = false
    }
    if (password1 !== password2) {
      setPasswordsMatch(false)
      allTestsPass = false
    }
    if (!includesLower.test(password1)) {
      SetPasswordLowerLetter(false)
      allTestsPass = false
    }
    if (!includesUpper.test(password1)) {
      SetPasswordUpperLetter(false)
      allTestsPass = false
    }
    if (!includesNumber.test(password1)) {
      setPasswordNumber(false)
      allTestsPass = false
    }
    if (!includesSymbol.test(password1)) {
      setPasswordContainsSymbol(false)
      allTestsPass = false
    }
    if (!lengthIsAtLeast8.test(password1)) {
      setPasswordLength(false)
      allTestsPass = false
    }
    setEmail("")
    setPassword1("")
    setPassword2("")
    if(allTestsPass) {
      navigate("/decks")
    }
  }
  return (
    <Background>
      <AuthHeader/>
      <div className='authBody'>
        <AuthCard handleSubmit={handleSubmit}>
          <label htmlFor='registerEmail'>Email</label>
          <input type='email' id='registerEmail' value={email} onChange={handleUpdateEmail} placeholder='youremail@website.com'></input>
          <label htmlFor='registerPassword'>Password</label>
          <input type='password' id='registerPassword'value={password1} onChange={handleUpdatePassword1} placeholder='password'></input>
          <label htmlFor="reenterPassword">Re-enter Password</label>
          <input type="password" id="reenterPassword" value={password2} onChange={handleUpdatePassword2} placeholder='re-enter password'/>
          <div className='registrationErrorBox'>
            {allfieldsFilled ? "" : <p className='registrationError'>All inputs must be filled in</p>}
            {passwordsMatch ? "" : <p className='registrationError'>Passwords must match</p>}
            {passwordLength ? "" : <p className='registrationError'>Password must be at least 8 characters long</p>}
            {passwordLowerLetter ? "" : <p className='registrationError'>Password must include a lowercase letter</p>}
            {passwordUpperLetter ? "" : <p className='registrationError'>Password must include an uppercase letter</p>}
            {passwordNumber ? "" : <p className='registrationError'>Passwords must include a number</p>}
            {passwordSymbol ? "" : <p className='registrationError'>Passwords must include one of these symbols: !@#$%^&*-_=+.,?</p>}
          </div>
          <button type='submit' className='authButton'>Register</button>
          <button type='button' className='loginRegisterSwitch' onClick={handleLoginRegisterSwitch}>Already have an account? login here.</button>
        </AuthCard>
      </div>
    </Background>
  )
}

export default Register