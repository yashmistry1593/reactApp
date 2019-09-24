
import React, { Component } from 'react';
import calculator from "./app-assets/calculator.png"
import weather from "./app-assets/cloud.png"
import todo from "./app-assets/to-do.png"
import mole from "./app-assets/whack-a-mole.png"
import tictactoe from "./app-assets/tictactoe.png"
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
              <h2 className="App-header">My Applications</h2>
              <ul className="list">
                <Link to="/calculator">
                  <li>
                    <img src={calculator} className="list-img" />
                    <p>calculator App</p>
                  </li>
                </Link>
                <Link to="/weather">
                  <li>
                    <img src={weather} className="list-img" />
                    <p>Weather App</p>
                  </li>
                </Link>
                <Link to="/todo">
                  <li>
                    <img src={todo} className="list-img" />
                    <p>Todo App</p>
                  </li>
                </Link>
                <Link to="/game"><li>
                  <img src={mole} className="list-img" />
                  <p>Whack-a-Mole</p>
                </li>
                </Link>
                <Link to="/tictactoe"><li>
                  <img src={tictactoe} className="list-img" />
                  <p>Tic-Tac-Toe</p>
                </li>
                </Link>
              </ul>  
      </div>
    )
  }
}

export default Home
