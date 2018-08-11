/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from '!babel-loader!mdx-loader!./Hello.md';
import Button from './Button';
import './App.css';
import 'highlight.js/styles/atom-one-dark.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>hey!</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
      </div>
    );
  }
}

export default App;
