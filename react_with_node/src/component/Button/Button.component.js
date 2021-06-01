import React, { Component } from 'react'
// import './Button.component.css'; 

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
                <button className={'button'} type={type} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export { Button }
