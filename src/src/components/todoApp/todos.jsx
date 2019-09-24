import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoItem from './todoItem'
import Header from './layout/header'
import AddTodo from './addTodo'
import uuid from 'uuid'
import About from './pages/about'
import Click from './click';
import FilterBox from './filterBox'

class Todos extends Component {

  constructor () {
    super();
    this.state = {
      filterValue:"All",
      todoList: [
        {
          id: uuid.v4(),
          title: "learn react",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "learn vue",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "learn angular",
          completed: false
        }
      ]
    }
  }

  markComplete(item) {
    console.log(item.id)
    this.setState({
      todoList: [...this.state.todoList.map((i) => {
        if (i.id === item.id) {
          i.completed = !i.completed
        }
        return i
      })]
    })
  }

  addTodoItem(title) {
  
    if (title.trim() !== "") {
      const newItem = {
        id: uuid.v4(),
        title:title,
        completed: false
      };
      this.setState({
        todoList: [...this.state.todoList, newItem]
      });
    }

    //e.target.newItem.value = ""
  }

  deleteTodo(item) {
    this.setState({
      todoList: [...this.state.todoList.filter((i) => i.id !== item.id)]
    })
  }

  filterByValue(){
    let val = this.state.filterValue;
    if(val=='Completed'){
      return this.state.todoList.filter((i) => i.completed == true);
    }else if(val=='Active'){
      return this.state.todoList.filter((i) => i.completed == false);
    }else{
      return this.state.todoList
    }
  }

  render() {
    console.log(this.state.todo)
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodoItem={e => this.addTodoItem(e)} />
              <ul>
                {this.filterByValue().map((item) =>
                  <TodoItem
                    key={item.id}
                    todoItem={item}
                    markComplete={(item) => this.markComplete(item)}
                    deleteTodo={(item) => this.deleteTodo(item)}
                  />)
                }
              </ul>
              <FilterBox filterByValue={(val)=>this.setState({filterValue: val})}/>
              <Click/>
            </React.Fragment>
          )} />

          <Route path='/todos/about' component={About} />

        </div>
      </Router>
    )
  }
}

export default Todos