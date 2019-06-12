import React from 'react';
import logo from './logo.svg';
import Home from './Home';
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
          {this.state.todo ?  <Home todo={this.state.todo.title} /> : ''}
        </header>
      </div>
      );
  }
}
