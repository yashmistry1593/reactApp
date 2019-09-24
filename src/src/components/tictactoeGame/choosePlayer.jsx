import React, { Component } from "react";

class ChoosePlayer extends Component {
    handleForm(e) {
        e.preventDefault();
        // console.log(e.target.player.value)
        this.props.player(e.target.player.value)

    }
    render() {
        return (
            <div className="player">
                <form onSubmit={(e) => this.handleForm(e)}>
                    <label htmlFor="player">Player X</label>
                    <input type="radio" name="player" value="X" />
                    <label htmlFor="player">Player 0</label>
                    <input type="radio" name="player" value="0" />
                    <input type="submit" value="start" className="btn-success" />
                </form>
            </div>
        )
    }
}

export default ChoosePlayer