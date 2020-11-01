import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home.jsx"
import Register from "../pages/Register.jsx"
import Login from "../pages/Login.jsx"
import PostNew from "../pages/PostNew.jsx"
import PostShow from "../pages/PostShow.jsx"
import PostList from "../pages/PostList.jsx"
import PostEdit from "../pages/PostEdit.jsx"
import ProfilePage from "../pages/ProfilePage.jsx"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/post/new" component={PostNew} />
            <Route path="/post/:id" component={PostShow} />
            <Route path="/post/:id/edit" component={PostEdit} />
            <Route path="/posts" component={PostList} />
            <Route path="/Profile" component={ProfilePage} />
        </Switch>
    )
}

export default Routes;