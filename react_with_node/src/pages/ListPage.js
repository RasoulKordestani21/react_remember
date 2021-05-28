import React, { Component } from 'react'

export class ListPage extends Component {
    friends = [
        { name: "ali", age: 22 },
        { name: "ahmad", age: 33 },
        { name: "saeed", age: 12 },
        { name: "vahid", age: 23 },


    ]
    render() {
        return (
            <div>
                <h1>ListPage</h1>
                <ul>
                    {this.friends.map((item, index) =>
                        <li key={index}>name : {item.name} | age:{item.age} </li>
                    )}
                </ul>

                <ul>
                    {this.friends.map((item, index) =>
                        <li key={index}>name : {item.name} | age:{item.age} </li>
                    )}
                </ul> 
            </div>
        )
    }
}

export default ListPage
