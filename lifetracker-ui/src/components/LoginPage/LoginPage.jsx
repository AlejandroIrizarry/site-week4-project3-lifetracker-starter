import * as React from "react";
import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";
import ActivityPage from "../ActivityPage/ActivityPage";

export default function LoginPage(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <ActivityPage />
        </div>
      ) : (
        <LoginForm
          errors={props.errors}
          setErrors={props.setErrors}
          handleOnSubmit={props.handleOnSubmit}
          isLoggedIn={props.isLoggedIn}
          setIsLoggedIn={props.setIsLoggedIn}
        />
      )}
    </div>
  );
}
