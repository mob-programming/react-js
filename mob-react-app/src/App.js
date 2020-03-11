import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <span data-testid='counter'>0</span>
      <button>Increment</button>
    </div>
  );
}

export default App;
