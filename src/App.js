/* eslint-disable */
import React, { Component } from 'react';
import Catalog from './Catalog';
import Hello from '!babel-loader!mdx-loader!./Content/Hello.md';
import Welcome from '!babel-loader!mdx-loader!./Content/Welcome.md';
import 'highlight.js/styles/idea.css';

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: (props) => <Welcome {...props} />
  },
  {
    path: '/hello',
    title: 'Hello',
    content: (props) => <Hello {...props} />
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Catalog pages={pages} />
      </div>
    );
  }
}

export default App;
