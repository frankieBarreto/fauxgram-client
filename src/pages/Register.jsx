import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import AuthModel from "../models/AuthModel";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Yo`);
    AuthModel.register({ username, email, password }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        props.history.push("/login");
      } else {
        setError(response.message);
      }
    });
  }

  return (
    <Container>
      <Card style={{ width: "30rem" }}>
        
      <Card.Body>
        <div>
          <h2>Register for an Account!</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <input type="submit" value="Register" />
          </form>
        </div>
      </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
