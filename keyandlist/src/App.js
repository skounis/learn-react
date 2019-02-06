import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    <li 
      key={index.toString()}
      value={index.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


class App extends Component {

  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div className="App">
        <header className="App-header">
          <NumberList numbers={numbers}/>
        </header>
      </div>
    );
  }
}

export default App;
