import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header({backButton}) {
    const navigate = useNavigate()

    const handleLogout = () => {
        
    }
    const handleRtnHome = () => {
        navigate("/decks")
    }
    
  return (
    <header className='authHeader'>
        <button className='authButton' onClick={handleLogout}>{"Logout"}</button>
        <h1 onClick={handleRtnHome}>My Tarot Journal</h1>
        {backButton? backButton : <div className='authSpacer'/>}
    </header>
  )
}

export default Header