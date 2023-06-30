import * as React from "react";
import avatar from "../../assets/avatar.svg";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import axios from "axios";

export default function RegistrationForm({
  errors,
  setErrors,
  registrationForm,
  setRegistrationForm,
}) {
  const navigate = useNavigate();

  const handleOnRegistrationChange = (event) => {
    setRegistrationForm((e) => ({
      ...e,
      [event.target.name]: event.target.value,
    }));
    console.log("RegForm=", registrationForm);
  };

  const signupUser = async (event) => {
    event.preventDefault();
    if (
      registrationForm.email == "" ||
      registrationForm.password == "" ||
      registrationForm.firstName == "" ||
      registrationForm.lastName == "" ||
      registrationForm.passwordConfirm == "" ||
      registrationForm.username == ""
    ) {
      setErrors("Missing Field");
    } else if (registrationForm.passwordConfirm !== registrationForm.password) {
      setErrors("passwords don't match");
    } else if (registrationForm.email.indexOf("@") <= 0) {
      setErrors("Invalid email!");
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: registrationForm.username,
        lastName: registrationForm.lastName,
        firstName: registrationForm.firstName,
        email: registrationForm.email,
        password: registrationForm.password,
      });
      console.log("response reg=", response);

      if (response?.data?.user) {
        setErrors("");
        navigate("/login");
        setIsLogged(true);
        console.log("yo", errors);
        setRegistrationForm({
          email: "",
          username: "",
          firstName: "",
          lastName: "",
          password: "",
          passwordConfirm: "",
        });
        console.log("works6");
      }
    } catch (error) {
      if (errors == "") {
        setErrors("Email or Username already in use");
      }
    }
  };

  return (
    <div className="registration-form">
      <div className="register-card">
        <span className="avatar-icon">
          <img src={avatar} alt="avatar icon" />
        </span>
        <h2>Create an Account</h2>
        <div className="form">
          <form>
            <div className="form-section">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={registrationForm.email}
                onChange={handleOnRegistrationChange}
              ></input>
            </div>
            <div className="form-section">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Username"
                value={registrationForm.username}
                onChange={handleOnRegistrationChange}
              ></input>
            </div>
            <div className="split-form-section">
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={registrationForm.firstName}
                  onChange={handleOnRegistrationChange}
                ></input>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={registrationForm.lastName}
                  onChange={handleOnRegistrationChange}
                ></input>
              </div>
            </div>
            <div className="form-section">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={registrationForm.password}
                onChange={handleOnRegistrationChange}
              ></input>
            </div>
            <div className="form-section">
              <input
                className="form-input"
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                value={registrationForm.passwordConfirm}
                onChange={handleOnRegistrationChange}
              ></input>
            </div>
            <button className="submit-registration" onClick={signupUser}>
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div>
        Have an account?
        <a href="/login"> Login</a>
      </div>
    </div>
  );
}
