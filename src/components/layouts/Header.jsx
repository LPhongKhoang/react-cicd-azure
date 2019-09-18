import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Long PK pro</span>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
