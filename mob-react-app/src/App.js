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
        <button className="counter" onClick={incrementTally}>
          Click to Count
        </button>
        <button className="reset" onClick={resetTally}>
          Click to Reset
        </button>
      </div>
      <span className="tally" aria-label="counter tally">{clickCount}</span>
    </div>
  );
}

export default App;
