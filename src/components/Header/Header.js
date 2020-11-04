import React, { useEffect } from "react";
import UserModel from "../../models/UserModel";

import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import "./Header.css";

const Header = (props) => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
        console.log(user);
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
      <div className="logo"></div>
      {user ? (
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Fauxgram</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href={"/login"}>Login</Nav.Link>
              <Nav.Link href={"/register"}>Register</Nav.Link>
              <Nav.Link href={"/posts"}>Posts</Nav.Link>
              <Nav.Link href={"post/new"}>PostNew</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
              <Navbar.Text>
                &nbsp;<a href="/profile">{user.username}</a>
              </Navbar.Text>
            </Form>
          </Navbar>
        </>
      ) : (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Fauxgram</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href={"/login"}>Login</Nav.Link>
              <Nav.Link href={"/register"}>Register</Nav.Link>
              <Nav.Link href={"/posts"}>Posts</Nav.Link>
              <Nav.Link href={"post/new"}>PostNew</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
      )}
    </header>
  );
};

export default Header;
