import * as React from "react";
// import { createContext, useContext} from "react";
const AuthContext = React.createContext(null);
import apiClient from "../services/apiClient";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [initialized, setInitialized] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [errors, setErrors] = React.useState("");

  React.useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();

      if (error) {
        setErrors(error);
      }

      if (data) {
        setUser(data.user);
        setErrors(null);
      }

      setInitialized(true);
    };

    const token = localStorage.getItem("lifetracker_token");

    if (token) {
      apiClient.setToken(token);
      setIsProcessing(true);
      setErrors(null);
      fetchUser();
    } else {
      setIsProcessing(false);
      setInitialized(true);
    }
  }, [setUser]);

  const logoutUser = async () => {
    await apiClient.logoutUser();
    setUser({});
    setErrors(null);
  };

  const authValue = {
    user,
    setUser,
    initialized,
    setInitialized,
    isProcessing,
    setIsProcessing,
    errors,
    setErrors,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
