import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import Results from '../Results'
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guess,setGuess]=React.useState('')
  const [guesses,setGuesses]=React.useState([])
  const [numOfAttemps, setNumOfAttemps] = React.useState(0)
  const [won,setWon] = React.useState(false)

  function handleInputChange(event){
    setGuess(event.target.value.toUpperCase())
  }

  function onSubmit(){
    event.preventDefault()

    if(guess.length > 5 ) return window.alert('Not should be grather than 5')
    if(guess.length < 5 ) return window.alert('It must not be less than 5')

    setGuesses([...guesses,guess])
    setGuess('')
    setNumOfAttemps(numOfAttemps+1)
    if(guess===answer) return  setWon(true)
  }

  return <div>
    <Results guesses={guesses} answer={answer}/>
    {won  || numOfAttemps === NUM_OF_GUESSES_ALLOWED ? 
      <Banner won={won} answer={answer} numOfAttemps={numOfAttemps}/> :  
      <Input guess={guess} onSubmit={onSubmit} handleInputChange={handleInputChange}/> 
    }
  </div>;
}

export default Game;
