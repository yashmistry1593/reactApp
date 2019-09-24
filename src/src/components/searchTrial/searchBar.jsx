import React, { Component } from "react";

class SearchBar extends Component {
    handleChange = () => {

        this.props.onFilterInput(this.refs.searchInputText.value);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-8">
                    <input ref="searchInputText" value={this.props.val} onChange={this.handleChange} type="search" className="form-control" placeholder="Search for products" />
                </div>
            </div>
        )
    }
}
export default SearchBar