import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: ""
    }

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(){
    this.setState({todo: "Nieuw todo"});
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo: {this.state.todo}
        </p>
        <button onClick={this.clickEvent}>Nieuwe todo</button>
      </header>
    </div>
    );
  }
}
