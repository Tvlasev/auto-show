import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return(
    <div>
      <p>Register Page</p>
      <Link to="/" style={{padding: "10px"}}>Home</Link>
      <Link to="/login">Login</Link>
    </div>
  )
};

export default Register;
