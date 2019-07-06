import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home";

class Routes extends Component {
    render() {
        return (
            <div>
               <Route exact path="/" component={Home}/>
               <Route path="/h" component={() => "hiiiiiiiii"}/>
            </div>
        );
    }
}

export default Routes;