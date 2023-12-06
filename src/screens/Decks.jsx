import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'

function Decks() {
  const riderWaite = {
    name: "Rider Waite",
    image: "https://gfx.tarot.com/images/site/decks/rider/mid_size/1.jpg"
  }
  const decks = [riderWaite]
  const deckDisplay = decks.map((deck, index) => {

    return (
      <div className='deckContainer'>
        <div className='deckCard'>
          <img className='deckImg' src = {deck.image} alt={deck.name + " Image"}></img>
        </div>
        <p className='deckName'>
          {deck.name}
        </p>
      </div>
    )

  })
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
              {deckDisplay}
            </div>
        </body>
    </Background>
  )
}

export default Decks