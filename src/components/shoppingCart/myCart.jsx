import React, { Component } from "react";
import "./shop.css"
class MyCart extends Component {

    constructor() {
        super();
        this.state = {
            shoppingList: []
        }
    }

    addShoopingItem(e) {
        e.preventDefault()
        var shoppingItem = e.target.sitem.value
        this.setState({
            shoppingList: [...this.state.shoppingList, {
                id: "",
                itemName: shoppingItem,
                itemCount: 1,
            }]
        })
    }

    incrementItem(itemName) {
        let updatedList = this.state.shoppingList.map(item => {
            if (item.itemName == itemName) item.itemCount++
            return item
        });
        this.setState({ shoppingList: updatedList });
    }

    decrementItem(itemName) {
        let updatedList = this.state.shoppingList.map(item => {
            if (item.itemName == itemName && item.itemCount != 0) item.itemCount--
            return item
        });
        this.setState({ shoppingList: updatedList });
    }

    deleteItem(itemName) {
        var updatedList = this.state.shoppingList.filter(item => item.itemName != itemName);
        this.setState({ shoppingList: updatedList });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addShoopingItem(e)}>
                    <input type="text" name="sitem" />
                    <button type="submit" className="btn badge-warning">Add</button>
                </form>
                <div className="shoppingResult">
                    <ul className="">
                        {this.state.shoppingList.map((shop, index) =>
                            <li key={index}>
                                <p className="shopItem">{shop.itemName}</p>
                                <span>{shop.itemCount}</span>
                                <button className="badge-danger inc" onClick={() => this.incrementItem(shop.itemName)}>+</button>
                                <button className="badge-danger dec" onClick={() => this.decrementItem(shop.itemName)}>-</button>
                                <button className="badge-warning delete" onClick={() => this.deleteItem(shop.itemName)}>Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyCart