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
          <Link to="/React-Modal-Auto-Focus">React Modal with Auto Focus</Link>
        </li>
        <li>
          <Link to="/React-Modal-No-Af">React Modal No Auto Focus</Link>
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
