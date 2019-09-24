import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Home"
import TodoApp from "./components/todoApp/todos"
import WeatherApp from "./components/weatherApp/weatherApp"
import GamesApp from "./components/whackAMole/game"
import CalcApp from "./components/newCalculator/calcMain"
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={WeatherApp} />
          <Route path='/calculator' component={CalcApp} />
          <Route path='/todo' component={TodoApp} />
          <Route path='/game' component={GamesApp} />
        </div>
      </Router>
    );
  }

  // const listStyle ={
  //   display 
  // }
}

export default App;
