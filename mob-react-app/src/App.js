import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <span className="hidden-label" id="counter-button-label">counter button</span>
      <button aria-labelledby="counter-button-label">Click to Count</button>
    </div>
  );
}

export default App;
