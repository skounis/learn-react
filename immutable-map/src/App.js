import React, { Component } from 'react';
import { Map } from 'immutable';
import logo from './logo.svg';
import './App.css';

// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is rendered.
const ErrorMessage = ({ error }) => {
  const m = Map([[null, null]]).get(error, <strong>{error}</strong>);
  return m;
}
  

// This component displays the passed-in "loading"
// property as italic text. If it's null, then
// nothing is rendered.
const LoadingMessage = ({ loading }) => {
  const m = Map([[null, null]]).get(loading, <em>{loading}</em>);
  return m;
  };

class App extends Component {
  render() {
    const errorMsg = <h1>Error Message H1</h1>;
    return (
      <div className="App">
        <header className="App-header">
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
            <ErrorMessage error={errorMsg}/>
            <ErrorMessage error={null}/>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
