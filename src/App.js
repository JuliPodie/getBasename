import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import d from './getData';
 

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    d("username").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


