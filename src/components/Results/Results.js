import React from 'react';
import { range } from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {checkGuess} from '../../game-helpers'

function Results({guesses,answer}) {
  console.info({ answer });

  return <div className="guess-results">
      { range(0,NUM_OF_GUESSES_ALLOWED).map((g ,i)=> {
        
        if(!guesses[i]) {
          return <p className="guess" key={i}>{range(0,5).map((o)=> <span className="cell" key={o}></span>)}</p>
        }
        
        const letters = checkGuess(guesses[i],answer)

        return (<p className="guess" key={g}>{
          letters.map(({letter,status},i)=> <span key={i} className={"cell " + status}>{letter}</span>)
        }</p>)
      })}
    </div>;
}

export default Results;
