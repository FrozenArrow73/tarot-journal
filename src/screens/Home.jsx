import React from 'react'
import {useNavigate} from 'react-router-dom'
import Background from "../components/Background"

function Home() {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/register")
  }
  const handleLogin = () => {
    navigate("/Login")
  }
  return (
    <Background>
        <header className='homeHeader'>
            <button onClick={handleRegister} className='authButton'>Register</button>
            <h1>My Tarot Journal</h1>
            <button onClick={handleLogin} className='authButton'>Login</button>
        </header>
        <body className='homeBody'>
          <div className='homeContainer'>
            <h2 className='homeH2'>Welcome to My Tarot Journal</h2>
            <p>My Tarot Journal is an all inclusive website for tarot and oracle journaling. Where you can record the symbolic meaning of each card in your tarot decks. You can record your readings and interpretations. Finally you will be able to search through you readings making all that information accessable to you. Empowering you to make new connections, see patterns and learn the tarot or oracle cards on a deeper level then ever before! Making an account is free. Please enjoy.</p>
          </div>
        </body>
    </Background>
  )
}

export default Home