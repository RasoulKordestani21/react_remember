

import React, { Component } from 'react'
import { Mouse } from '../terminal';
import { Cat } from "../terminal"
class MouseTracker extends React.Component {
    render() {
      return (
        <>
          <h1>Move the mouse around!</h1>
              <Mouse render={(mouse) => {
                 return (<Cat mouse={mouse} />)
              }}/>
        </>
      );
    }
}
  

export { MouseTracker }
