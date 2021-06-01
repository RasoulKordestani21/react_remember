import React from 'react';
import catImg from '../assets/images/cat.jpg';
class Cat extends React.Component {
    render() {
        console.log(this.props.mouse)
        const mouse = this.props.mouse
        return (
        <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y , width:"150px" }} />
      );
    }
}
  
export { Cat } 