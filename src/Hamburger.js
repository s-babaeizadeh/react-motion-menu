import React, { Component, createRef } from "react"
import styled from "styled-components"
import { Motion, spring } from "react-motion"

import "./App.css"

const Drawer = styled.div`
  position: absolute;
  height: 100%;
  background: #87ceeb;
  width: 30vh;
  left: ${(props) => props.left}vh;
`

const Link = styled.div`
  cursor: pointer;
  padding: 1em 1em 1em 3em;
  color: white;
  font-weight: bold;
`

class Hamburger extends Component {
  constructor(props) {
    super(props)
    
    this.myRef = createRef();
    
    this.state = {
      toggleState: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {    
    this.setState(prevState => ({toggleState: prevState.toggleState ? 0 : 1}))
  }

  render() {
    return (
      <div id="parent">
        <div id="nav-bar">
          <div className="container" ref={this.myRef} onClick={this.handleClick}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>

        <Motion
          defaultStyle={{ left: -40 }}
          style={{
            left: spring(this.state.toggleState ? 0 : -40, {
              stiffness: 210,
              damping: 10,
            }),
          }}
        >
          {(style) => (
            <Drawer left={style.left}>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </Drawer>
          )}
        </Motion>
      </div>
    )
  }
}
export default Hamburger
