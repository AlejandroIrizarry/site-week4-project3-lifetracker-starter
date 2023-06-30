import * as React from "react";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import axios from "axios";

export default function LoginForm({
  errors,
  setErrors,
  loginForm,
  setLoginForm,
  isLoggedIn,
  setIsLoggedIn,
}) {
  let navigate = useNavigate();

  console.log("loginForm=", loginForm);
  function handleOnLoginChange(event) {
    setLoginForm((e) => ({ ...e, [event.target.name]: event.target.value }));
    console.log("loginFormAfter=", loginForm);
  }

  const loginUser = async (event) => {
    event.preventDefault();
    if (loginForm.email == "" || loginForm.password == "") {
      setErrors("Missing Field");
    } else if (loginForm.email.indexOf("@") <= 0) {
      setErrors("Invalid email!");
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: loginForm.email,
        password: loginForm.password,
      });
      console.log("response reg=", response);

      if (response?.data?.user) {
        setErrors("");
        navigate("/activity");
        setIsLoggedin(true);
        console.log("yo", errors);
        setLoginForm({
          email: "",
          password: "",
        });
        console.log("works6");
      }
    } catch (error) {
      if (errors == "") {
        setErrors("Invalid Password and Username combo");
      }
    }
  };

  return (
    <div className="login-form">
      <div className="login-card">
        <span className="avatar-icon">
          <img src={avatar} alt="avatar icon" />
        </span>
        <h2>Welcome</h2>
        <div className="form">
          <form>
            <div className="form-section">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={handleOnLoginChange}
              ></input>
            </div>
            <div className="form-section">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleOnLoginChange}
              ></input>
            </div>
            <button className="submit-login" onClick={loginUser}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div>
        New to us?
        <a href="/register"> Sign Up</a>
      </div>
    </div>
  );
}
