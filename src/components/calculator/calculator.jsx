import React, { Component } from "react";


class Calculator extends Component {
    state = {
        displayValue: '0',
        waitForOperand: false,
        operator: null,
        value: 0
    }

    inputDigit(digit) {
        const {
            displayValue,
            waitForOperand,
            lastValue
        } = this.state;
        if (waitForOperand) {
            console.log(digit + " second operand")
            this.setState({
                displayValue: String(digit),
                // displayValue: displayValue + String(digit),
                waitForOperand: false
            })
        } else {
            console.log(digit + " first operand")
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        }

    }

    inputDot() {
        const {
            displayValue
        } = this.state;
        if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.'
            })
        }
    }

    clearTheDisplay() {
        //const { displayValue } = this.state;
        this.setState({
            displayValue: "0",
            value: null,
            nextValue: null,
            currentValue: null
        })
    }

    inputPercent() {
        const {
            displayValue
        } = this.state;
        const currentValue = parseFloat(displayValue);
        this.setState({
            displayValue: String(currentValue / 100)
        })
    }

    performOpertaion(nextOperator) {
        const {
            displayValue,
            operator,
            value
        } = this.state;
        const nextValue = parseFloat(displayValue);
        console.log(nextValue)
        const CalculatorOperations = {
            '/': (prevValue, nextValue) => prevValue / nextValue,
            '*': (prevValue, nextValue) => prevValue * nextValue,
            '+': (prevValue, nextValue) => prevValue + nextValue,
            '-': (prevValue, nextValue) => prevValue - nextValue,
            '%': (prevValue, nextValue) => (prevValue / 100) * nextValue,
            '=': (prevValue, nextValue) => nextValue
        }
        if (value === 0) { //condition to check whether this is the first operand
            this.setState({
                value: nextValue
            })
            console.log(value)
            if (nextOperator === '%') {
                this.setState({
                    displayValue: String(value / 100)
                })
                console.log(displayValue)
            }
            console.log(nextOperator)
        } else if (operator) {
            const currentValue = value || 0;
            console.log(currentValue)
            const computedValue = CalculatorOperations[operator](currentValue, nextValue);

            this.setState({
                value: computedValue,
                displayValue: String(computedValue)
            })


            console.log(computedValue)
        }
        this.setState({
            waitForOperand: true,
            operator: nextOperator
        })
    }

    // showResult() {
    //     const {
    //         displayValue,
    //         operator
    //     } = this.state;
    //     console.log(displayValue)
    //     this.setState({
    //         waitForOperand: false,
    //         operator: operator,
    //         displayValue: displayValue + operator
    //     })

    //     switch (operator) {
    //         case '+':
    //     }
    // }
    
    render() {
        const { displayValue } = this.state
        return (
            <React.Fragment>
                <div className="calculator">
                    <div className="output">{displayValue}</div>
                    <div className="keypad">
                        <div className="key clear" onClick={() => this.clearTheDisplay()}>AC</div>
                        <div className="key bksp" onClick={() => this.performOpertaion('%')}>%</div>
                        <div id="divide" className="key operator" onClick={() => this.performOpertaion('/')}>÷</div>
                        <div className="key integer" onClick={() => this.inputDigit(7)}>7</div>
                        <div className="key integer" onClick={() => this.inputDigit(8)}>8</div>
                        <div className="key integer" onClick={() => this.inputDigit(9)}>9</div>
                        <div id="multiply" className="key operator" onClick={() => this.performOpertaion('*')}>x</div>
                        <div className="key integer " onClick={() => this.inputDigit(4)}>4</div>
                        <div className="key integer" onClick={() => this.inputDigit(5)}>5</div>
                        <div className="key integer" onClick={() => this.inputDigit(6)}>6</div>
                        <div id="subtract" className="key operator" onClick={() => this.performOpertaion('-')}>-</div>
                        <div className="key integer" onClick={() => this.inputDigit(1)}>1</div>
                        <div className="key integer" onClick={() => this.inputDigit(2)}>2</div>
                        <div className="key integer" onClick={() => this.inputDigit(3)}>3</div>
                        <div id="add" className="key operator" onClick={() => this.performOpertaion('+')}>+</div>
                        <div id="zero" className="key integer" onClick={() => this.inputDigit(0)}>0</div>
                        <div id="dot" className="key integer" onClick={() => this.inputDot()}>.</div>
                        <div id="equals" className="key operator" onClick={() => this.performOpertaion('=')}>=</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Calculator;