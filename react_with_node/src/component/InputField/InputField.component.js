import React, { Component } from 'react'

export class InputField extends Component {
    state = {
        value: ""
    }

    changeHandler = ({ target }) => {
        /*target is destructure !!!*/this.setState({ value: target.value });
        this.props.onChangeInput(this.state.value);
    }
    render() {
        /*destructure also applied to here*/
        const { value } = this.state;
        const { title = "set a title please" } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input type="text" value={value} onChange={ this.changeHandler }/>
            </div>
        )
    }
}

export default InputField
