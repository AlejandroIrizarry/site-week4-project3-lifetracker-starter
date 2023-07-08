import * as React from "react";
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import NutritionPage from "../NutritionPage/NutritionPage";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import NutritionNew from "../NutritionNew/NutritionNew";
import AccessForbidden from "../AccessForbidden/AccessForbidden";
import NotFound from "../NotFound/NotFound";
import apiClient from "../../services/apiClient";
import NutritionContext from "../../contexts/nutrition";
import AuthContext from "../../contexts/auth";
import ActivityContext from "../../contexts/activity";

function App() {
  const { userContext } = React.useContext(AuthContext);

  const { nutritionContext } = React.useContext(NutritionContext);
  const [nutrition, setNutrition] = nutritionContext;

  const [user, setUser] = userContext;
  const [errors, setErrors] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const { activityContext } = React.useContext(ActivityContext);
  const [activity, setActivity] = activityContext;

  const handleOnLogout = () => {
    setUser({});
    setNutrition({});

    //remove token from localStorage
    localStorage.removeItem(apiClient.tokenName);
  };

  return (
    <div className="app">
      <main>
        <Router>
          <Navbar
            handleOnLogout={handleOnLogout}
            user={user}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
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
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
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
            <Route
              path="/activity"
              element={
                user?.email ? (
                  <ActivityPage user={user} />
                ) : (
                  <Navigate to="/forbidden" />
                )
              }
            />
            <Route
              path="/nutrition/*"
              element={<NutritionPage user={user} />}
            />
            <Route path="/nutrition/create" element={<NutritionNew />} />
            <Route path="/forbidden" element={<AccessForbidden />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
