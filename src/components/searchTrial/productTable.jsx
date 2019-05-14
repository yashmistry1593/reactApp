import React, { Component } from "react";
import ProductRow from "./productRow";


class ProductTable extends Component {
    render() {
        var props = this.props
        var rows = this.props.prodLists
            .filter(function (prod) {
                return prod.productName.toLowerCase().indexOf(props.val.toLowerCase()) > -1;
            })
            .map(function (prod) {
                return <ProductRow key={prod.id} id={prod.id} product={prod.productName} price={prod.price} />
            })

        //console.log(rows)
        return (

            <div className="col-lg-8 col-lg-offset-4">
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>

        )
    }

}

export default ProductTable


