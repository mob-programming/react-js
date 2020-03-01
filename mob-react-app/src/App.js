import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

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
        <button aria-labelledby="counter-button-label" onClick={() => setClickCount(clickCount + 1)}>Click to Count
        </button>
      </div>
    </div>
  );
}

export default App;
