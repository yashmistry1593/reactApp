import React, { Component } from "react";
import ShoppingItem from "./shoppingItem";

class MyProject extends Component {


    constructor() {
        super();
        this.state = {
            shoppingList: [
                {
                    id: "1",
                    title: "shirt",
                    quantity: "2"
                },
                {
                    id: "2",
                    title: "pants",
                    quantity: "6"
                },
                {
                    id: "3",
                    title: "shoes",
                    quantity: "4"
                }
            ]
        }
    }

    render() {
        return (
            <div className="project">
                {this.props.test}
                <p>my first project</p>
                <ShoppingItem items={this.state.shoppingList} />
            </div>
        )
    }
}

export default MyProject;