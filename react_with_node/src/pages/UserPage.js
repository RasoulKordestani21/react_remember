import React, { Component } from 'react'
import UserDetail from '../component/UserDetail';
export class UserPage extends Component {
    user = [
        { name: "student1", imageSrc: "https://cdn.fakercloud.com/avatars/peter576_128.jpg" },
        { name: "student2", imageSrc: "https://cdn.fakercloud.com/avatars/webtanya_128.jpg" },
        { name: "student3", imageSrc: "https://cdn.fakercloud.com/avatars/nicollerich_128.jpg" },
        { name: "student4", imageSrc: "https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg" },

    ]
    render() {
        return (
            <div>
                {this.user.map(item => <UserDetail name={item.name} imageSrc={item.imageSrc} />)}
            </div>
        )
    }

}
export default UserPage
