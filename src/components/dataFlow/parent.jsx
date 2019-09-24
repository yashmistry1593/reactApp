import React, { Component } from 'react'
import Child from './child'
import ClickedCount from './clickedCount'
import HoverCount from './hoverCount'

class Parent extends Component {
  constructor () {
    super();
    this.state = {
      item: "",
      count: 0
    }
  }

  displayData(i) {
    this.setState({
      item: i
    })
  }

  incrementCount() {
    const newCount=this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {

    return (
      <div>
        <Child showData={(i) => this.displayData(i)} content={"Yash"} />
        <p>{this.state.item}</p>
        <HoverCount incrementCount={() => this.incrementCount()} count={this.state.count} />
        <ClickedCount incrementCount={() => this.incrementCount()} count={this.state.count} />
      </div>
    )
  }
}

export default Parent
