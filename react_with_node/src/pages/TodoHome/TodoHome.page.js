import React, { Component } from 'react'
import Form from './Components/Form/Form.component'
export class TodoHomePage extends Component {
    state = {
        flag: true
    }
    componentDidMount() {
        console.log("form mounted");
    }
    componentWillUnmount() {
        console.log("form unmounted")
    }
    render() {
        return (
            <div>
                <header>header</header>
                {this.state.flag && <Form />}
                <button onClick={() => { this.setState({ flag: true }) }}>form adder</button>
                <button onClick={() => { this.setState({ flag: false }) }}>form remover</button>
            </div>
        )
    }
}

export default TodoHomePage
