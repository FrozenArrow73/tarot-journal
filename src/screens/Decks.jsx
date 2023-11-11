import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'

function Decks() {
  return (
    <Background>
        <Header/>
        <body className='decksBody'>
            <nav className='decksNav'>

            </nav>
            <div className='decksList'>

            </div>
        </body>
    </Background>
  )
}

export default Decks