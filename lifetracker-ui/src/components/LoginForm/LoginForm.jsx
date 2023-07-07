import * as React from "react";
import avatar from "../../assets/avatar.svg";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import axios from "axios";
import AuthContext from "../../contexts/auth";
import apiClient from "../../services/apiClient";

export default function LoginForm(props) {
  const { userContext } = React.useContext(AuthContext);
  const [user, setUser] = userContext;
  let navigate = useNavigate();

  const loginFormInit = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = React.useState(loginFormInit);

  // reset error message on mount
  React.useEffect(() => {
    props.setErrors();
  }, []);

  const onFormChange = (event) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
    console.log("loginFormAfter=", loginForm);
    props.setErrors();
  };

  const handleOnSubmit = async () => {
    const { data, error } = await apiClient.loginUser(loginForm);
    if (error) props.setErrors(error);
    if (data?.user) {
      setUser(data.user);
      console.log("login form token received:", data.token);
      apiClient.setToken(data.token);
    }
  };
  //setIsLoggedIn={props.setIsLoggedIn(true)

  return (
    <div className="login-form">
      <div className="loginCard">
        {user?.email && (
          <Navigate
            to="/activity"
            replace={true}
            setIsLoggedIn={props.setIsLoggedIn(true)}
          />
        )}
        <span className="avatar-icon">
          <img src={avatar} alt="avatar icon" />
        </span>
        <h2 id="loginform-title">Welcome</h2>
        <div className="form">
          <p className="error" style={{ color: "red" }}>
            {props?.errorMessage}
          </p>
          <div className="login-form-section">
            <input
              className="form-input"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={onFormChange}
              required
              type="email"
            />
          </div>
          <div className="login-form-section">
            <input
              className="form-input"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={onFormChange}
              required
              type="password"
            />
          </div>
          <button onClick={(e) => handleOnSubmit()} className="submit-login">
            Login
          </button>
        </div>
        <p>
          New to Us? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
