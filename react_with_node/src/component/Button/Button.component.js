import React, { Component } from 'react'

const buttonStyles = {
    color: "gray",
    backgroundColor: "aqua",
    padding: '5px',
    borderRadius: '20%'
}
class Button extends Component {


    handleClick = (event) => {
        console.log('salam')
        // if (this.props.type === 'sumbit') {
        //     this.props.onClick(event)
        // }
        this.props.onClick(event);
        event.preventDefault();
    }
    render() {
        const { type = "button" } = this.props;//destructure 
        return (
            <div>
                <button style={buttonStyles}  type={type} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export { Button }
