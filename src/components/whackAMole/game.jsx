import React, { Component } from 'react'
import Holes from './holes.jsx'
import '../../moles-assets/moles.css'

export class Game extends Component {
  constructor () {
    super()
    this.state = {
      points: 0,
      holeList: Array(6).fill(0),
      randomHole: null,
      randomTime: null,
      isTimeUp: false,
      hitMole: null,
      countdown: 30,
      isDisabled: false,
      isRed: false,
      interval:null,
    }
  }

  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  randomHole() {
    return Math.floor(Math.random() * this.state.holeList.length)
  }

  peep() {
    const { holeList, isTimeUp } = this.state
    let randomTime = this.randomTime(200, 1000)
    let randomHole = this.randomHole()
    let newHoleList=[...holeList]
    newHoleList[randomHole] = 1;
    this.setState({
      holeList: newHoleList
    }, () => {
      setTimeout(() => {
        this.setState({
          holeList: holeList.fill(0)
        }, () => {
          if (!isTimeUp) {
            this.peep()
          }
        })
      }, randomTime)
    })
  }

  startGame() {
    console.log("hiiii")
    this.peep()
    this.startCountDown()
    this.isDisabled = true
    setTimeout(() => {
      this.setState({
        isTimeUp: true,
      })
    }, 30000)
  }

  startCountDown() {
    
    let newCountDown
    this.interval = setInterval(() => {
      newCountDown = this.state.countdown - 1
      newCountDown < 5 ? this.isRed = true : null
      this.setState({
        countdown: newCountDown
      })
      if (this.state.countdown == 0) {
        clearInterval(this.interval)
        this.isDisabled=false
      }
    }, 1000)

  }

  incrementPoints(moleIndex) {
    if (this.hitMole !== moleIndex) {
      this.setState({
        hitMole: moleIndex
      })
      const newCount = this.state.points + 1
      this.setState({
        points: newCount
      })
    }
  }

  // reset(){

  //   this.setState({
  //     points:0,
  //     countdown:30,
  //     isTimeUp: false,
  //   })
  //    clearInterval(this.interval)
  //   this.startGame()
  // }

  render() {
    return (
      <div className="game-container">
        <h1>Whack-a-mole! <span className="score">{this.state.points}</span></h1>
        <p>Time Left : <span style={this.isRed == true ? red : null}>{this.state.countdown}</span></p>
        <button onClick={() => this.startGame()} style={this.isDisabled ? disabled : null}>Start!</button>
        <button onClick={()=>this.reset()}>Play Again</button>

        <div className="game">
          {this.state.holeList.map((item, i) => {
            return <Holes key={i} index={i} item={item} incrementPoints={(moleIndex) => this.incrementPoints(moleIndex)} />
          })}
        </div>
      </div>
    )
  }
}

const disabled = {
  pointerEvents: 'none'
}

const red = {
  color: 'red'
}
export default Game
