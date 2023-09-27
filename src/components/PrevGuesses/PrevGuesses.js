import React from 'react';

import {range} from '../../utils'  
import Guess from '../Guess/Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function PrevGuesses({guesses, answer}) {

  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <Guess 
          key={num} 
          guess={guesses[num]}
          answer={answer}
        />
      ))}
    </div>);
}

export default PrevGuesses;
