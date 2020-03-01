import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <div className="counter-tally-container">
        <span className="hidden-label" id="counter-tally-label">counter tally</span>
        <span className="tally" aria-labelledby="counter-tally-label">0</span>
      </div>
      <div className="counter-button-container">
        <span className="hidden-label" id="counter-button-label">counter button</span>
        <button aria-labelledby="counter-button-label">Click to Count</button>
      </div>
    </div>
  );
}

export default App;
