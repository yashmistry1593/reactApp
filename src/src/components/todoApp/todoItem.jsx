import React, { Component } from 'react'

export class todoItem extends Component {


  // constructor(props){
  //   super(props);
    
  // }

  getItemStyle = (isCompleted) => {
    return {
      textDecoration: isCompleted ? 'line-through' : '',
      padding: "10px 30px",
      background: '#f4f4f4',
      borderBottom: '1px #ccc dotted',
      textAlign: 'left'
    }
  }



  render() {
    const {todoItem}=this.props
    return (
      <li style={this.getItemStyle(this.props.todoItem.completed)}>
        <input type="checkbox" onClick={() => this.props.markComplete(todoItem)} name="" id="" />
        {todoItem.title}
        <button style={btnStyle} onClick={() => this.props.deleteTodo(todoItem)}></button>
      </li>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  padding: '10px 10px'
}

export default todoItem

