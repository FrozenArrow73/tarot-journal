import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

function AddDeck() {
    const backButton = <BackButton destination={"/decks"}/>
  return (
    <Background>
        <Header backButton={backButton}/>
        <div className='createDeck'>
            <form className='addDeckForm'>
                <label htmlFor='deckName'>Name</label>
                <input type="text" id="deckName"/>
                <label htmlFor="deckImage">Cover Image</label>
                <input type="file" id="deckImage"/>
                <button className='defaultButton'>Submit</button>
            </form>
        </div>
    </Background>
  )
}

export default AddDeck