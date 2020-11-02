import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import PostNew from "../pages/PostNew.jsx";
import PostShow from "../pages/PostShow.jsx";
import PostList from "../pages/PostList.jsx";
import PostEdit from "../pages/PostEdit.jsx";
// import ProfilePage from "../pages/ProfilePage.jsx"

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {loggedIn && (
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/post/:id/edit" component={PostEdit} />
          <Route path="/posts" component={PostList} />
          {/* <Route path="/profile" component={ProfilePage} /> */}
        </Switch>
      )}
    </Switch>
  );
};

export default Routes;
