import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    if (username === "user" && password === "123456") {
      navigate("/");
    }
  };

  return (
    <div className="formContainer">
      <h2 className="title">Login to page</h2>
      <form className="form">
        <input
          name="username"
          value={username}
          type={"text"}
          placeholder="Email or Username"
          onChange={onChangeUserName}
        />
        <input
          name="password"
          value={password}
          type={"password"}
          placeholder="Password"
          onChange={onChangePassword}
        />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
