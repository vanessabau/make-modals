import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="table
    "
    >
      <ul id="horizontal-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/React-Modal-Focus-Lock">React Modal Focus Lock</Link>
        </li>
        <li>
          <Link to="/React-Modal-No-Af">React Modal Focus Lock No AF</Link>
        </li>
        <li>
          <Link to="/React-Modal-Focus-Trap">React Modal Focus Trap</Link>
        </li>
        <li>
          <Link to="/PL-Modal-New">Pattern Library Modal New</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
