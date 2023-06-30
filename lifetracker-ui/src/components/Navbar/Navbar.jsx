import { Link } from "react-router-dom";
import logo from "../../assets/codepath.svg";
import * as React from "react";
import "./Navbar.css";
import NavLinks from "../NavLinks/NavLinks";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
}
