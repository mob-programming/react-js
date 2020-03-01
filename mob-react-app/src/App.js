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
      <div className="counter-tally-container">
        <span className="hidden-label" id="counter-tally-label">counter tally</span>
        <span className="tally" aria-labelledby="counter-tally-label">{clickCount}</span>
      </div>
      <div className="counter-button-container">
        <span className="hidden-label" id="counter-button-label">counter button</span>
        <button className="counter-button" aria-labelledby="counter-button-label" onClick={incrementTally}>Click to
          Count
        </button>
      </div>
      <div className="counter-reset-button-container">
        <span className="hidden-label" id="counter-reset-button-label">counter reset button</span>
        <button className="counter-reset-button" aria-labelledby="counter-reset-button-label" onClick={resetTally}>Click
          to Reset
        </button>
      </div>
    </div>
  );
}

export default App;
