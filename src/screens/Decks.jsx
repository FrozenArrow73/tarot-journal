import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'

function Decks() {
  return (
    <Background>
        <Header/>
        <body className='decksBody'>
            <nav className='decksNav'>
                <button className='defaultButton'>Record Reading</button>
                <button className='defaultButton'>Auto Reading</button>
                <button className='defaultButton'>Create Spread</button>
                <button className='defaultButton'>Search Readings</button>
            </nav>
            <div className='decksList'>

            </div>
        </body>
    </Background>
  )
}

export default Decks