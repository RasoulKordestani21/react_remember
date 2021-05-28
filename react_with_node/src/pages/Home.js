import React, { Component } from 'react'

export class Home extends Component {
    test = "test1";
    render() {
        return (
            <div>
                <h1>homepage | {this.test}</h1>
            </div>
        )
    }
}

export default Home
