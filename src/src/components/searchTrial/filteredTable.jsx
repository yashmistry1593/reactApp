import React, { Component } from "react";
import ProductTable from "./productTable";
import SearchBar from "./searchBar";

class Filteredtable extends Component {

    constructor() {
        super();
        this.state = {
            filterText: "",
            prodLists: [
                {
                    id: 1,
                    productName: "bread",
                    price: 100
                },
                {
                    id: 2,
                    productName: "butter",
                    price: 50
                },
                {
                    id: 3,
                    productName: "milk",
                    price: 20
                },
                {
                    id: 4,
                    productName: "eggs",
                    price: 60
                },
                {
                    id: 5,
                    productName: "coffee",
                    price: 70
                },
                {
                    id: 6,
                    productName: "tea",
                    price: 65
                },
                {
                    id: 7,
                    productName: "lemons",
                    price: 45
                },
                {
                    id: 8,
                    productName: "apples",
                    price: 160
                },
                {
                    id: 9,
                    productName: "banana",
                    price: 75
                },
                {
                    id: 10,
                    productName: "mango",
                    price: 80
                },
                {
                    id: 11,
                    productName: "watermelon",
                    price: 35
                }
            ]
        }
    }

    handleFilterInput = (ft) => {
        this.setState({
            filterText: ft
        });
    }

    render() {




        return (
            <div>
                <SearchBar onFilterInput={this.handleFilterInput} val={this.state.filterText} />
                <ProductTable val={this.state.filterText} prodLists={this.state.prodLists} />
            </div>

        )
    }

}

export default Filteredtable