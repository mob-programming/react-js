import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [outputText, setText] = useState('1');

  return (
    <div className="App">
      <header className="App-header">
        Mob React App
      </header>
      <span data-testid='counter'>{count}</span>
      <button className='counter' onClick={() => { setCount(count + 1) }}>Increment</button>
      <button className='reset' onClick={() => { setCount(0) }}>Reset</button>
      <input type="text" data-testid='decoderInput' onChange={() => setText('hello')}/>
      <span data-testid='decoderOutput'>{outputText}</span>
    </div>



  );
}

export default App;
