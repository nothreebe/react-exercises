import React from 'react';
import logo from './logo.svg';
import './App.css';


import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: null
    };

    this.getApi();

  };

  getApi = () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/2';
    fetch(url).
      then(response => response.json()).then((res) => {
        this.setState({
          todo: res.title
        });
      });

    // axios.get('https://jsonplaceholder.typicode.com/todos/2')
    //   .then((response) => {
    //     this.setState({
    //       todo: response.data.title,
    //     })
    //   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.todo ? <Home todo={this.state.todo} /> : ""}
        </header>
      </div>
    );
  }
}

export default App;