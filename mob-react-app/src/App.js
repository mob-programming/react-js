import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <span data-testid='counter'>{count}</span>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <button onClick={() => { setCount(0) }}>Reset</button>
    </div>
  );
}

export default App;
