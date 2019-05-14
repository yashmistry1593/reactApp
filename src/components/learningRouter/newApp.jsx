import React, { Component } from "react";
//import { Router, Route } from "react-router"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import User from "./User";

class NewApp extends Component {
    render() {
        return (
            // <Root>
            //     <Home></Home>
            // </Root>
            <Router>
                <div>
                    <Route path="/user" component={User} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        );
    }

}

export default NewApp