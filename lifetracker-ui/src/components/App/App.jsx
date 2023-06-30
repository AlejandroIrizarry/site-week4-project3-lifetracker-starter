import * as React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import "./App.css";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient";

function App() {
  const { user } = useAuthContext();
  const { errors, setErrors } = useAuthContext();

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div className="app">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <LoginPage
                  errors={errors}
                  setErrors={setErrors}
                  loginForm={loginForm}
                  setLoginForm={setLoginForm}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RegistrationPage
                  errors={errors}
                  setErrors={setErrors}
                  registrationForm={registrationForm}
                  setRegistrationForm={setRegistrationForm}
                />
              }
            />
            <Route path="/activity" element={<ActivityPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
