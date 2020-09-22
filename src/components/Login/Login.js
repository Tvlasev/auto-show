import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <p>Login Page</p>
      <Link to="/" style={{padding: "10px"}}>Home</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
