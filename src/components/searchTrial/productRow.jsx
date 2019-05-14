import React, { Component } from "react";


class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.product}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }

}

export default ProductRow