import React, { Component } from 'react'

class HoverCount extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={()=>this.props.incrementCount()}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default HoverCount
