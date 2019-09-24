import React, { Component } from 'react'
import Screen from './screen'
import Button from './inputBtn'
import KeyPad from './keypad'
import '../../calci.css'

export class CalcMain extends Component {

  constructor () {
    super();
    this.state = {
      result: ""
    }
  }

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  calculate() {
    if (this.state.result != "") {
      let res = eval(this.state.result)
      this.setState({
        result: res
      })
    }
  }

  handleClick(keyVal) {
    if (keyVal == '=') {
      this.calculate()
    }
    else if (keyVal == 'C') {
      this.setState({
        result: ''
      })
    } else if (keyVal == 'CE') {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + keyVal
      })
    }
  }

  render() {
    return (
      <div className="frame">
        <Screen result={this.state.result} />
        <KeyPad handleClick={(keyVal) => this.handleClick(keyVal)} />
      </div>
    )
  }
}

export default CalcMain
