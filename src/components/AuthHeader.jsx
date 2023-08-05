import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthHeader() {
    const navigate = useNavigate()
    const handleRtnHome = () => {
        navigate("/")
    }
  return (
    <header className='authHeader'>
        <button className='authButton' onClick={handleRtnHome}>{"Home"}</button>
        <h1 onClick={handleRtnHome}>My Tarot Journal</h1>
        <div className='authSpacer'/>
    </header>
  )
}

export default AuthHeader