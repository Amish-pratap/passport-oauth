import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://source.unsplash.com/random/900x700/?avatar"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">john doe</li>
          <li className="listItem">logout</li>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
