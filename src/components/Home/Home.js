import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link to="/login" style={{padding: "10px"}}>Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;