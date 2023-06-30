import * as React from "react";
import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import ActivityPage from "../ActivityPage/ActivityPage";

export default function LoginPage({
  errors,
  setErrors,
  isLoggedIn,
  handleLoggedIn,
  setIsLoggedIn,
  loginForm,
  setLoginForm,
}) {
  return (
    <div>
      <Navbar />

      {isLoggedIn ? (
        <div>
          <ActivityPage />
        </div>
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          errors={errors}
          setErrors={setErrors}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
          handleLoggedIn={handleLoggedIn}
        />
      )}
    </div>
  );
}
