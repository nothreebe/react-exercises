import React from 'react';

export default class Home extends React.Component {


  render() {
      return (
        <div>
        <p>TODO 1: {this.props.todo}</p>
      </div>
      );
  }
}
