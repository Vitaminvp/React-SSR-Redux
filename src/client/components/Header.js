import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ auth }) => {
  console.log("auth", auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo"> React SSR</NavLink>
        <ul className="right">
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/admins">Admins</NavLink></li>
          <li>{auth ? (
              <a href="/api/logout">Logout</a>
          ) : (
              <a href="/api/auth/google">Login</a>
          )}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
