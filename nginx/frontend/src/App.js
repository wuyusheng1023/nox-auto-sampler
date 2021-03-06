import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react'


function App() {
  useEffect(() => {
    // fetch('http://localhost/series/')
    //   .then(res => res.json())
    //   .then(console.log)
    //   .catch(console.error);
    fetch('http://localhost/series/', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({"name": "yusheng"})
      // body: {"name": "yusheng"}
      })
      .then(res => res.json())
      .then(console.log)
      .catch(console.error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
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
