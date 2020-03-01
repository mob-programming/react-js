import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  function incrementTally() {
    setClickCount(clickCount + 1);
  }

  function resetTally() {
    setClickCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <div className="button-container">
        <span className="hidden-label"
              id="counter-button-label">counter button</span>
        <button className="counter"
                aria-labelledby="counter-button-label"
                onClick={incrementTally}>Click to Count
        </button>
        <span className="hidden-label"
              id="counter-reset-button-label">counter reset button</span>
        <button className="reset"
                aria-labelledby="counter-reset-button-label"
                onClick={resetTally}>Click to Reset
        </button>
      </div>
      <span className="tally"
            aria-label="counter tally">{clickCount}</span>
    </div>
  );
}

export default App;
