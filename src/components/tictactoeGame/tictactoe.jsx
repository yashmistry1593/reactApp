import React, { Component } from "react";
import ChoosePlayer from "./choosePlayer"
import "./tictac.css"


class TicTac extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: Array(9).fill(null),
            player: null,
            winner: null
        }
    }

    checkWinner() {
        let {
            board,
            player,
            winner
        } = this.state;

        let winRules = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let index = 0; index < winRules.length; index++) {
            const [a, b, c] = winRules[index]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert(player + "has won the game")
                this.setState({
                    winner: player
                })
                // console.log(player + "is the winner")
            }
        }
    }

    handleClick(index) {
        let {
            board: newBoard,
            player: newPlayer,
            winner
        } = this.state;

        //initial value in the clicked box should be null && winner should be null && newplayer should be selected
        if (newBoard[index] == null && winner === null && newPlayer) {
            newBoard[index] = newPlayer;
            newPlayer = newPlayer === "X" ? "0" : "X";
            this.setState({
                board: newBoard,
                player: newPlayer
            })
            this.checkWinner()
        }
    }

    setPlayer(p) {
        console.log(p)
        this.setState({
            player: p    // instead of writing player:player 
        })
    }

    render() {
        let {
            board,
            player,
            winner
        } = this.state;
        const Box = this.state.board.map((box, i) => <div key={i} className="box" onClick={() => this.handleClick(i)}>{box}</div>)

        var animation = {
            animationName: "tada"
        };

        var status
        if (winner) {
            status = <h2 style={animation} className="animated">The winner is {winner}</h2>
        } else {
            status = player ? <h4>Next Player is {player}</h4> : <ChoosePlayer player={(playerName) => this.setPlayer(playerName)} />
        }


        return (
            <div className="container">
                <h1>Tic Tac Toe App</h1>
                {status}
                <div className="board">
                    {Box}
                </div>
            </div>

        )
    }

}
export default TicTac