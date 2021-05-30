import React, { Component } from 'react'

class InputField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    changeHandler = async ({ target }) => {

        // /*method_1 wighout await*//*target is destructure !!!*/this.setState({ value: target.value });
        await /*method_2 with await*/this.setState({ value: target.value })
        this.props.onChangeInput(this.state.value);
    }

    componentDidMount() {
        console.log("mounted");
        this.setState({ value: this.props.value })
        console.log(this.state.value)
    }
    shouldComponentUpdate(nextProp, nextState) {
        if (this.props.value !== nextProp.value) this.setState({ value: nextProp.value });
        return true;
    }
    render() {
        console.log("didmou")

        /*destructure also applied to here*/
        // const { value } = this.props.value;
        console.log(this.state);
        const { title = "set a title please" } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input type="text" value={this.state.value} onChange={this.changeHandler} />
            </div>
        )
    }
}

export { InputField }
