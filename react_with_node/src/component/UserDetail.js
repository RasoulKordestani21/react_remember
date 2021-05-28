import React, { Component } from 'react'

export class UserDetail extends Component {

    render() {
        return (
            <div>
                <li>
                    <img src={this.props.imageSrc} width="100px" height="100px" />
                    <a>{this.props.name}</a>
                </li>
            </div>
        )
    }
}

export default UserDetail
