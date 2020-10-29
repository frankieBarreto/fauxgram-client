import React, { useState } from "react";

import AuthModel from "../models/AuthModel";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    AuthModel.register({ username, email, password }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        props.history.push("/login");
      } else {
        setError(response.message);
      }
    });
  }
}

export default Register;
