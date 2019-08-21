import React from 'react';
import './App.css';
import * as comps from './components';
import * as util from './util';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      {/* Examples */}
      {/* Class based: <comps.Button /> */}
      {/* <br /> <br /> */}
      {/* Single state hook: <comps.HookButton /> */}
      {/* <br /> <br /> */}
      {/* Multi hook: <comps.MultiHookButton /> */}
      {/* <br /> <br /> <br /> <br /> <br /> */}
      <comps.Messages />
      <comps.NewMessage user='me' />
    </div>
  );
}

export default App;
