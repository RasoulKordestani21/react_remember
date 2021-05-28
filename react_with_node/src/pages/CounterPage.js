import React, { Component } from 'react'

export class CounterPage extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter + 1 })
                }}>increase</button>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter - 1 })
                }}>decrease</button>
                <h4>countercount</h4>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default CounterPage
