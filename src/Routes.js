import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Accommodations from './pages/Accommodations';

function Routes() {
    return (
        <ReactRoutes>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/signup" component={Signup}>
            </Route>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/accommodations" component={Accommodations}>
            </Route>
        </ReactRoutes>
    );
}

export default Routes;