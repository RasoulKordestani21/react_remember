import React, { Component } from 'react'
import ButtonStyle from './Button.module.scss'; 

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
            <div className={ButtonStyle.wrapper_in_temp}>
                <button className={'button'} type={type} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export { Button }
