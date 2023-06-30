import * as React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="nav-links">
      <ul className="links">
        <li>
          <Link className="nav-link" to="/activity">
            Activity
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/exercise">
            Exercise
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/nutrition">
            Nutrition
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sleep">
            Sleep
          </Link>
        </li>
      </ul>
      <div className="nav-btn-container">
        <Link to="/login">
          <button type="button" className="nav-btn-content">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="nav-btn-content">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
