import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      id: "",
      title: "",
      completed: false
    }

    this.getApi = this.getApi.bind(this);

    this.getApi();
  }

  getApi() {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo? {this.state.title}</p>
        </header>
      </div>
    )
  }
}
export default App;
