import React, { Component } from 'react'
import InnerChild from './innerChild'

class Child extends Component {

  render() {
    return (
      <div>
        <InnerChild showData={(item) =>this.props.showData(item)} />
        <span>{this.props.content}</span>
      </div>
    )
  }
}

export default Child
