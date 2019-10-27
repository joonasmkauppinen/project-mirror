import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Mirror mirror on the wall.</p>
      <a
        className="App-link"
        href="https://images.google.com/search?q=mirror"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google for Mirrors
      </a>
    </header>
  </div>
);

export default App;
