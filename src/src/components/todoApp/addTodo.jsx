import React, { Component } from 'react'

export class AddTodo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  handleOnChangeInput(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addTodoItem(this.state.title);
    this.setState({
      title: ''
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)} method="post" style={formStyle}>
          <input type="text" value={this.state.title} name="newItem" style={inputStyle} onChange={(e) => this.handleOnChangeInput(e)} />
          <input type="submit" style={submitBtnStyle} />
        </form>
      </div>
    )
  }
}


const formStyle = {
  display: 'flex'
}

const inputStyle = {
  flex: 'nowrap',
  width: '100%'
}

const submitBtnStyle = {
  flex: 'nowrap',
  border: 'none',
  background: '#555',
  color: '#fff',
  padding: '7px 20px',
  cursor: 'pointer'
}
export default AddTodo
