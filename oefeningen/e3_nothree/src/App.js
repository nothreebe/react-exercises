import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ""
    }

    this.showToDo = this.showToDo.bind(this);
  }

  showToDo() {
    this.setState({ todo: "Nieuwe todo" })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Todo: {this.state.todo}
          </p>
          <button onClick={this.showToDo}>Nieuwe todo</button>
        </header>
      </div>
    )
  }
}


export default App;
