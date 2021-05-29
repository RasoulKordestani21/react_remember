import React, { Component } from 'react'

class InputField extends Component {
    state = {
        value: ""
    }

    changeHandler = async ({ target }) => {

        // /*method_1 wighout await*//*target is destructure !!!*/this.setState({ value: target.value });
        await /*method_2 with await*/this.setState({ value: target.value })
        this.props.onChangeInput(this.state.value);
    }

    // componentDidMount() {
    //     console.log("mounted")
    // }
    render() {
        console.log("didmou")

        /*destructure also applied to here*/
        const { value } = this.state;
        const { title = "set a title please" } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input type="text" value={value} onChange={this.changeHandler} />
            </div>
        )
    }
}

export { InputField }
