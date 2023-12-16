import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
function Cards() {
    const riderWaite = {
        id: 1,
        name: "Rider Waite",
        image: "https://gfx.tarot.com/images/site/decks/rider/mid_size/1.jpg",
        cards: [
            {
                name: "The Fool",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/0.jpg"
            },
            {
                name: "The Magician",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/1.jpg"
            },
            {
                name: "The High Priestess",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/2.jpg"
            },
            {
                name: "The Empress",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/3.jpg"
            },
            {
                name: "The Emperor",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/4.jpg"
            },
            {
                name: "The Hierophant",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/5.jpg"
            },
            {
                name: "The Lovers",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/6.jpg"
            },
            {
                name: "The Chariot",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/7.jpg"
            },
            {
                name: "Strength",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/8.jpg"
            },
            {
                name: "The Hermit",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/9.jpg"
            },
            {
                name: "Wheel of Fortune",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/10.jpg"
            },
            {
                name: "Justice",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/11.jpg"
            },
            {
                name: "The Hanged Man",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/12.jpg"
            },
            {
                name: "Death",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/13.jpg"
            },
            {
                name: "Temperance",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/14.jpg"
            },
            {
                name: "The Devil",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/15.jpg"
            },
            {
                name: "The Tower",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/16.jpg"
            },
            {
                name: "The Star",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/17.jpg"
            },
            {
                name: "The Moon",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/18.jpg"
            },
            {
                name: "The Sun",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/19.jpg"
            },
            {
                name: "Judgement",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/20.jpg"
            },
            {
                name: "The World",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/21.jpg"
            },
            {
                name: "Ace of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/22.jpg"
            },
            {
                name: "Two of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/23.jpg"
            },
            {
                name: "Three of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/24.jpg"
            },
            {
                name: "Four of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/25.jpg"
            },
            {
                name: "Five of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/26.jpg"
            },
            {
                name: "Six of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/27.jpg"
            },
            {
                name: "Seven of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/28.jpg"
            },
            {
                name: "Eight of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/29.jpg"
            },
            {
                name: "Nine of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/30.jpg"
            },
            {
                name: "Ten of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/31.jpg"
            },
            {
                name: "Page of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/32.jpg"
            },
            {
                name: "Knight of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/33.jpg"
            },
            {
                name: "Queen of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/34.jpg"
            },
            {
                name: "King of Wands",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/35.jpg"
            },
            {
                name: "Ace of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/36.jpg"
            },
            {
                name: "Two of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/37.jpg"
            },
            {
                name: "Three of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/38.jpg"
            },
            {
                name: "Four of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/39.jpg"
            },
            {
                name: "Five of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/40.jpg"
            },
            {
                name: "Six of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/41.jpg"
            },
            {
                name: "Seven of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/42.jpg"
            },
            {
                name: "Eight of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/43.jpg"
            },
            {
                name: "Nine of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/44.jpg"
            },
            {
                name: "Ten of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/45.jpg"
            },
            {
                name: "Page of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/46.jpg"
            },
            {
                name: "Knight of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/47.jpg"
            },
            {
                name: "Queen of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/48.jpg"
            },
            {
                name: "King of Cups",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/49.jpg"
            },
            {
                name: "Ace of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/50.jpg"
            },
            {
                name: "Two of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/51.jpg"
            },
            {
                name: "Three of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/52.jpg"
            },
            {
                name: "Four of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/53.jpg"
            },
            {
                name: "Five of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/54.jpg"
            },
            {
                name: "Six of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/55.jpg"
            },
            {
                name: "Seven of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/56.jpg"
            },
            {
                name: "Eight of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/57.jpg"
            },
            {
                name: "Nine of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/58.jpg"
            },
            {
                name: "Ten of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/59.jpg"
            },
            {
                name: "Page of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/60.jpg"
            },
            {
                name: "Knight of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/61.jpg"
            },
            {
                name: "Queen of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/62.jpg"
            },
            {
                name: "King of Swords",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/63.jpg"
            },
            {
                name: "Ace of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/64.jpg"
            },
            {
                name: "Two of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/65.jpg"
            },
            {
                name: "Three of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/66.jpg"
            },
            {
                name: "Four of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/67.jpg"
            },
            {
                name: "Five of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/68.jpg"
            },
            {
                name: "Six of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/69.jpg"
            },
            {
                name: "Seven of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/70.jpg"
            },
            {
                name: "Eight of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/71.jpg"
            },
            {
                name: "Nine of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/72.jpg"
            },
            {
                name: "Ten of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/73.jpg"
            },
            {
                name: "Page of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/74.jpg"
            },
            {
                name: "Knight of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/75.jpg"
            },
            {
                name: "Queen of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/76.jpg"
            },
            {
                name: "King of Coins",
                image: "https://gfx.tarot.com/images/site/decks/rider/full_size/77.jpg"
            }
        ]
      }
    const backButton = <BackButton destination={"/decks"}/>
    const cardsDisplay = riderWaite.cards.map((card)=>{
        return (
            <div className='deckContainer' key={card.id} id={card.id}>
              <div className='deckCard' id={card.id}>
                <img className='deckImg' src = {card.image} alt={card.name + " Image"} id={card.id}></img>
              </div>
              <p className='deckName' id={card.id}>
                {card.name}
              </p>
            </div>
          )
    })
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
            {cardsDisplay}
            <div className='deckContainer'>
                <div className='deckCard'>
                <div className='plus'>
                    +
                </div>
                </div>
                <p className='deckName'>Add Card</p>
            </div>
            </div>
        </div>
    </Background>
  )
}

export default Cards