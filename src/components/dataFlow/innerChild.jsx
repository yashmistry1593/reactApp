import React, { Component } from 'react'

class InnerChild extends Component {


  handleChange(e){
    this.props.showData(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e)=>this.handleChange(e)}/>
      </div>
    )
  }
}

export default InnerChild
