import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../models/UserModel";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import "./Header.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
      });
    }
    // this line disables syntax warnings?
    // eslint-disable-next-line 
  }, []);

  function logout() {
      setUser(null);
      localStorage.clear();
  }

  return (
      <header>
      <div className="logo">
      <h2>Fauxgram</h2>
          <ul>
          <li>
              <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
              <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
              <NavLink to={"/posts"}>Posts</NavLink>
          </li>
          <li>
              <NavLink to={"post/new"}>PostNew</NavLink>
          </li>
          <li>
              <NavLink to={"/ProfilePage"}>Profile</NavLink>
          </li>

          </ul>
      </div>
      </header>
  )


};

export default Header;
