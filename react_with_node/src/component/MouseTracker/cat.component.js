import React from 'react';
import catImg from '../assets/images/cat.jpg';
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouser
        return (
        <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y , width:"150px" }} />
      );
    }
}
  
export { Cat } 