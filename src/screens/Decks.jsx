import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function Decks() {
  const riderWaite = {
    id: 1,
    name: "Rider Waite",
    image: "https://gfx.tarot.com/images/site/decks/rider/mid_size/1.jpg"
  }
  const decks = [riderWaite]
  const navigate = useNavigate()
  const handleCardsClick = (event) => {
    navigate("/decks/cards/" + event.target.id)
  }
  const deckDisplay = decks.map((deck, index) => {

    return (
      <div className='deckContainer' onClick={handleCardsClick} key={deck.id} id={deck.id}>
        <div className='deckCard' id={deck.id}>
          <img className='deckImg' src = {deck.image} alt={deck.name + " Image"} id={deck.id}></img>
        </div>
        <p className='deckName' id={deck.id}>
          {deck.name}
        </p>
      </div>
    )

  })
  const handleAddDeck = (event) => {
    navigate("/decks/addDeck")
  }
  return (
    <Background>
        <Header/>
        <div className='decksBody'>
            <nav className='decksNav'>
                <button className='defaultButton'>Record Reading</button>
                <button className='defaultButton'>Auto Reading</button>
                <button className='defaultButton'>Create Spread</button>
                <button className='defaultButton'>Search Readings</button>
            </nav>
            <div className='decksList'>
              {deckDisplay}
              <div className='deckContainer' onClick={handleAddDeck}>
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

export default Decks