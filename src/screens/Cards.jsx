import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
function Cards() {
    const backButton = <BackButton destination={"/decks"}/>
  return (
    <Background>
        <Header backButton = {backButton}/>
        <div className='decksBody'>
            <nav className='decksNav'>
                <button className='defaultButton'>Record Reading</button>
                <button className='defaultButton'>Auto Reading</button>
                <button className='defaultButton'>Create Spread</button>
                <button className='defaultButton'>Search Readings</button>
            </nav>
            <div className='decksList'>
            
            <div className='deckContainer'>
                <div className='deckCard'>
                <div className='plus'>
                    +
                </div>
                </div>
                <p className='deckName'>Add Deck</p>
            </div>
            </div>
        </div>
    </Background>
  )
}

export default Cards