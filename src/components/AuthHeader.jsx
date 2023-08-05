import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthHeader() {
    const navigate = useNavigate()
    const handleRtnHome = () => {
        navigate("/")
    }
  return (
    <header className='authHeader'>
        <button className='rtnHome' onClick={handleRtnHome}>{"<"}</button>
        <h1 onClick={handleRtnHome}>My Tarot Journal</h1>
        <div/>
    </header>
  )
}

export default AuthHeader