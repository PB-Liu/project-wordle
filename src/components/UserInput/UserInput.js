import React, {useState} from 'react';

function UserInput({updateGuesses}) {
  const [guess, setGuess] = useState(""); 

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    updateGuesses(guess);
    setGuess(""); 
  }
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required //ensure the input cannot be empty 
        id="guess-input" 
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        title="5 letter word only"
        pattern="[a-zA-Z]{5}"
        onChange={handleChange}
        />
    </form>
    );
}

export default UserInput;
