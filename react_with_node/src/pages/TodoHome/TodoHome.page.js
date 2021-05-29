import React, { Component } from 'react'
import Form from './Components/Form/Form.component'
export class TodoHomePage extends Component {
    state = {
        flag: true,
        flag2: false,
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("should Update :", this.state.flag, nextState.flag);
        // if (this.state.flag == nextState.flag) {
        //     window.location.href = "http://google.com";
        //     return false;
        // }
        return true
    }
    componentDidUpdate(prevProp, prevState) {
        console.log("did Update :", this.state.flag, prevState.flag);
    }
    render() {
        return (
            <div>
                <header>header</header>
                {this.state.flag && <Form onUnmount={() => { this.setState({ flag2: true }); console.log("!!!!") }} />}
                {/* <button onClick={() => { this.setState({ flag: true }) }}>form adder</button> */}
                <button type="button" onClick={() => this.setState({ flag: true })}>form adder</button>
                <button type="button" onClick={() => this.setState({ flag: false })}>form remover</button>
            </div>
        )
    }
}

export default TodoHomePage
