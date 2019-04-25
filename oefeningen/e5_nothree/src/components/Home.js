import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.todo)

        this.state = {
            todo: this.props.todo
        }

    }

    render() {
        return (
            <h1>{this.state.todo}</h1>
        )
    }
}

export default Home;