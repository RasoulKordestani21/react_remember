import React, { Component } from 'react'

export class TodoListPage extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        let users = JSON.parse(localStorage.getItem("users"));
        this.setState({ users })
        // console.log(users)
    }
    render() {
        return (
            <div>
                <ul>
                    <h2>hello</h2>
                    {this.state.users.map(item => <li>{item.title} | {item.description}  </li>)}

                </ul>
            </div>
        )
    }
}

export default TodoListPage
