import React, { Component } from "react";

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounter}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
