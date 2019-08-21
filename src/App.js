import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as comps from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Examples */}
        Class based: <comps.Button />
        <br/>
        Single state hook: <comps.HookButton />
        <br/>
        Multi hook: <comps.MultiHookButton />
      </header>
    </div>
  );
}

export default App;
