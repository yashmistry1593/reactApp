import React, { Component } from 'react'

export class Click extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  incrementCount(e){
   
   this.setState({
     count:this.state.count +1
   })
  }
  render() {

    const{count}=this.state
    return (
      <div>
        <button onClick={(e)=>this.incrementCount(e)} style={myBtn}>{count}</button>
      </div>
    )
  }
}

const myBtn={
  width:'60px',
  height:'40px'
}
export default Click
