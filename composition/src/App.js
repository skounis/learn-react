import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color={props.color}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      color={props.color}
      title="Welcome"
      message="Thank you for visiting our spacecraft!"
    />
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeDialog color="blue"/>
          <WelcomeDialog color="red"/>
          <SplitPane
            left={
              <p>Left</p>
            }
            right={
              <p>Right</p>
            } />
        </header>
      </div>
    );
  }
}

export default App;
