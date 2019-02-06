import React, { Component } from 'react';
import './App.css';

class Clock extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class App extends Component {
  
  renderClock() {
    return (
      <Clock date={new Date()}/>  
    );
  }
  
  render() {
    return this.renderClock();
  }
}

export default App;
