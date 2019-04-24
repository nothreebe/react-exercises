import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: null
    };
    this.getUser();
  }

  getUser() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => this.setState({ todo: json }));
  }
  
  render() {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO 1: {this.state.todo ? this.state.todo.title : ''}
          </p>
        </header>
      </div>
      );
  }
}
