import * as React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function NavLinks(props) {
  const handleLoggedIn = () => {
    localStorage.removeItem(apiClient.tokenName);
  };

  const handleOnClickLogout = () => {
    props.handleOnLogout();
  };

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
        {!props?.user?.email ? (
          <>
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
          </>
        ) : (
          <Link to="/">
            <button
              type="button"
              className="nav-btn-content"
              onClick={(e) => handleOnClickLogout()}
            >
              Log Out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
