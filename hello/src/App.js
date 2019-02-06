import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Wilcomen extends React.Component {
  render() {
    return (
      <>
      <hr/>
      <h1>Hello, {this.props.name}</h1>
      </>
      );
  }
}

function Halo(props) {
  return <Wilcomen name={props.name}/>
}

class App extends Component {
  render() {
    const me = <p>Stavros</p>;
    return (
      <div className="App">
        <header className="App-header">
        {me}
        <Welcome name="Stavros"/>
        <Wilcomen name="Bar" />
        <Halo name="papi"/>
        </header>        
      </div>
    );
  }
}

export default App;
