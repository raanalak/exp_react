import { useState } from 'react';
import logo from './logo.svg';
import OurComponent from './OurComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>React</h1>
        <OurComponent mood="happy" />
        <OurComponent mood="angry"/>
        <OurComponent mood="sad"/>

      </div>

    </>
  );
}

export default App;
