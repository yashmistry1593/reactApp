import React, { Component } from "react";


class ShoppingItem extends Component {
    render() {
        if (this.props.items) {
            var shoppingListItem = this.props.items.map(item =>
                <li key={item.id}>{item.title} , quantity ={item.quantity}</li>
            )
            console.log(shoppingListItem)
        }
        //console.log(this.props)
        return (
            <div className="shoppingList">
                <ul>
                    {shoppingListItem}
                </ul>
            </div>

        )
    }

}
export default ShoppingItem