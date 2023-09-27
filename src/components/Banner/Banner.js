import React from 'react';

function Banner({result, numOfGuesses, answer}) {
  if (result === 'win')
    return (<div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{numOfGuesses} guesses</strong>.
    </p>
  </div>);
  else if (result === 'lose') 
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.</p>
      </div>
    )
}

export default Banner;
