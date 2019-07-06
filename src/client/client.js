import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../client/components/Home';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";


ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.getElementById('root'));