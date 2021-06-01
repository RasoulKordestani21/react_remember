import React, { Component } from 'react'


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
                <button style={{
                    color: "gray",
                    backgroundColor: "aqua",
                    padding: '5px',
                    borderRadius: '20%'
                }} type={type} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export { Button }
