import React, { Component } from 'react'
import { InputField, Button } from '../../../../component/terminal'

class Form extends Component {
    state = {
        title: "",
        description: ""
    }
    handleChangeTitleInput = (title) => {
        this.setState({ title })
    }
    handleChangeDescriptionInput = (description) => {
        this.setState({ description })
    }
    handleChangeInput = (key, value) => {
        this.setState({ key: value })
    }
    handlClick = (param) => {
        console.log(param);
    }
    render() {
        console.log(Object.keys(this.state))
        return (
            <div>
                <form onSubmit={e => { e.preventDefault(); console.log('submited') }}>
                    <InputField title="username : " onChangeInput={(inputData) => this.handleChangeInput(Object.keys(this.state)[0], inputData)} />
                    <InputField title="password : " onChangeInput={(inputData) => this.handleChangeInput(Object.keys(this.state)[1], inputData)} />
                    <Button type="submit" onClick={this.handlClick}><span>sumbit</span></Button>
                </form>
            </div>
        )
    }
}

export default Form
