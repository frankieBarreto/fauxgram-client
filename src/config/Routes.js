import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home"
import Register from "../pages/Register"
import Login from "../pages/Login"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    )
}

export default Routes;