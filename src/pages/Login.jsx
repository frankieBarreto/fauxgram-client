import React, { useState } from "react";
import AuthModel from "../models/AuthModel";
import UserModel from "../models/UserModel";

import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

import { Container, Form, Button, Card } from "react-bootstrap";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(e) {
    e.preventDefault();

    AuthModel.login({ email, password }).then((response) => {
      console.log(response);
      localStorage.setItem("uid", response.signedJwt);
      UserModel.show().then((response) => {
        console.log(response);
        setUser(response.data);
        props.history.push("/post");
      });
    });
  }

  return (
    
    <Container>
      <Card.Body>
        <Card>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Card.Body>
    </Container>
  );
}

//     <div>
    //   <h2>Login</h2>
    //   <Form controlId="formBasicEmail" onSubmit={handleSubmit}>
    //     <div className='form-input'>
    //     <Form.Label>Email address</Form.Label>
    //       <input
    //         type='text'
    //         name='email'
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //       />
    //     </div>
    //     <div className='form-input'>
    //       <label htmlFor='password'>Password</label>
    //       <input
    //         type='password'
    //         name='password'
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //       />
    //     </div>

    //     <input type='submit' value='Login' />
    //   </Form>
    // </div>

export default Login;
