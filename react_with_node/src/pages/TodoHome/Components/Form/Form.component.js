import React, { Component } from 'react'
import { InputField, Button } from '../../../../component/terminal'

class Form extends Component {
    state = {
        title: "",
        description: ""
    }
    counter = 0;
    // intervalFunc = setInterval(() => { console.log(this.counter++) }, 1000)
    componentDidMount() {
        // console.log("mounted")
    }

    componentWillUnmount() {
        console.log("component removed form page !!!");
        // clearInterval(this.intervalFunc);
        this.setState({ title: 'salam' })
        // this.props.onUnmount();
    }
    // handleChangeTitleInput = (title) => {
    //     this.setState({ title })
    // }
    // handleChangeDescriptionInput = (description) => {
    //     this.setState({ description })
    // }
    handleChangeInput = (key, value) => {
        this.setState({ [key]: value })

    }
    handlClick = (param) => {
        this.props.onClick(this.state.title, this.state.description);
        this.setState({ title: '', description: '' });
        console.log(this.state)
    }
    render() {
        // console.log(this.state.title);
        return (
            <div>
                <form onSubmit={e => { console.log('submited') }}>
                    <InputField title="username : " value={this.state.title} onChangeInput={(inputData) => this.handleChangeInput(Object.keys(this.state)[0], inputData)} />
                    <InputField title="password : " value={this.state.description} onChangeInput={(inputData) => this.handleChangeInput(Object.keys(this.state)[1], inputData)} />
                    <Button onClick={this.handlClick}>sumbit</Button>
                </form>
            </div>
        )
    }
}

export default Form
