import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Form from './Components/Form/Form.component';
export class TodoHomePage extends Component {
    
    state = {
        flag: true,
        // data:{title:'',description:''},

        users: []
    }
    componentDidMount() {
        console.log("localStorage", localStorage.getItem('users'));
        console.log("users", this.state.users);
    }
    submitHandler = (title, description) => {
        // console.log(this.state)
        // const users = [...this.state.users, { title, description }]
        const users = this.state.users;
        users.push({ id: users.length, title, description });
        this.setState({ users });
        localStorage.setItem("users", JSON.stringify(users));

        console.log(this.state.users);
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
                {this.state.flag && <Form onClick={this.submitHandler} />}
                {/* <button onClick={() => { this.setState({ flag: true }) }}>form adder</button> */}
                {/* <ul>

                    {this.state.users.map(item => <li>{item.title} | {item.description}  </li>)}

                </ul> */} 
                {/* <TodoListPage /> */}
                <div>
                    <button type="button" onClick={() => this.setState({ flag: true })}>form adder</button>
                    <button type="button" onClick={() => this.setState({ flag: false })}>form remover</button>
                </div>
                <Link to='/lists' style={{ color: "white" }}>go to list page </Link>
            </div>
        )
    }
}

export default TodoHomePage
