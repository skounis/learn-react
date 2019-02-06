import React, { Component } from 'react';
import './App.css';

function GreetButton(props) {
  function greetings(name, e) {
    alert('Hello ' + name);
  }

  return (
    <>
    <button onClick={(e) => greetings(props.name, e)}>Say Hello</button>
    <button onClick={greetings.bind(this, props.name)}>Say Hello again</button>
    </>
  )
}

function GreetLink(props) {
  function noLink(message, e) {
    e.preventDefault();
    alert(message)
  }
  return (
    <>
    <a href="http://www.morethanthemes.com" onClick={(e) => noLink('Prefented', e)}>Fake link</a>
    </>
  )
}

class BGreetButton extends React.Component {
  constructor(props) {
    super(props);
    this.bindedGreetings = this.bindedGreetings.bind(this);
  }

  bindedGreetings(name, e) {
    alert('Hi there ' + name);
  }

  render() {
    return (
      <button onClick={(e) => this.bindedGreetings(this.props.name, e)}>Say Hi with binded</button>
    )
  }
}

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
    // this.setState({
    //   date: new Date()
    // });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <hr/>
        <GreetButton name='stavros'/>
        <BGreetButton name='jason' />
        <hr/>
        <GreetLink/>
      </div>
    );
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class App extends Component {
  
  renderClock() {
    return (
      <Clock date={new Date()}/>  
    );
  }
  
  render() {
    return this.renderClock();
  }

  // setInterval(render, 1000);
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
