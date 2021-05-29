import React, { Component } from 'react'

class Button extends Component {
    handleClick = (event) => {
        
        if (this.props.type === 'sumbit') {
            this.props.onClick(event)
        }
        event.preventDefault();
    }
    render() {
        const { type = "button" } = this.props;//destructure 
        return (
            <div>
                <button type={type} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export { Button }
