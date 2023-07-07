import * as React from "react";
import "./RegistrationPage.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Navbar from "../Navbar/Navbar";

export default function RegistrationPage({
  registrationForm,
  setRegistrationForm,
  isLoggedIn,
  errors,
  setErrors,
}) {
  return (
    <div className="registration-page">
      {isLoggedIn ? (
        <ActivityPage />
      ) : (
        <RegistrationForm
          errors={errors}
          setErrors={setErrors}
          registrationForm={registrationForm}
          setRegistrationForm={setRegistrationForm}
        />
      )}
    </div>
  );
}
