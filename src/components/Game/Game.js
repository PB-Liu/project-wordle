import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'



import UserInput from '../UserInput/UserInput';
import PrevGuesses from '../PrevGuesses/PrevGuesses';
import Banner from '../Banner/Banner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuesses, setPrevGuesses] = useState([]); 
  const [gameResult, setGameResult] = useState(null); 

  const updateGuesses = (guess) => { 
    const guessCopy = prevGuesses.slice(); 
    guessCopy.push(guess);
    setPrevGuesses(guessCopy);
    if(guess === answer) setGameResult('win');
    else if (prevGuesses.length === NUM_OF_GUESSES_ALLOWED - 1){
      setGameResult('lose')
    }
  
  }
  return (
    <>
      <PrevGuesses guesses={prevGuesses} answer={answer} />
      <UserInput 
        updateGuesses={updateGuesses}
        disabled={gameResult === 'win' || gameResult==='lose'}
      />;
      <Banner 
        result={gameResult} 
        numOfGuesses={prevGuesses.length}
        answer={answer}
        />
    </>
  )
}

export default Game;
