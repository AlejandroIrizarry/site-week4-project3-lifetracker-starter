import * as React from "react";
import apiClient from "../services/apiClient";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  const [isProcessing, setIsProcessing] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [error, setError] = React.useState();

  const fetchUserFromToken = async () => {
    setIsProcessing(true);
    try {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }

      if (error) setError(error);
    } catch (error) {
      console.error("Fetching user from token error:", error);
      setError(error);
    }

    setInitialized(true);
    setIsProcessing(false);
  };

  React.useEffect(() => {
    /* User token exist in the local storage, 
    fetch token and get from the database to perform token validation, 
    effectively retrieving necessary data*/
    const token = localStorage.getItem(apiClient.tokenName);

    if (token) {
      apiClient.setToken(token);
      fetchUserFromToken();
    } else {
      setInitialized(true);
    }
  }, []);

  const loginUser = async (loginForm) => {
    const { data, errorLogin } = await apiClient.loginUser(loginForm);
    if (errorLogin) {
      return { success: false, error: errorLogin };
    }
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
      return { success: true, user: data?.user };
    }
  };

  const registerUser = async (registrationForm) => {
    const { data, errorRegistration } = await apiClient.signupUser(
      registrationForm
    );
    if (errorRegistration) {
      return { success: false, error: errorRegistration };
    }
    if (data?.user) {
      setUser(data?.user);
      apiClient.setToken(data.token);
      return { success: true, user: data?.user };
    }
  };

  const logoutUser = async () => {
    setUser({});
    localStorage.removeItem(apiClient.tokenName);
  };

  if (!initialized) {
    return (
      <div className="content">
        <h1>Authenticating user...</h1>
      </div>
    );
  }

  if (error) {
    return <h1>There has been an error aunthenticating the user!</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        userContext: [user, setUser],
        loginContext: [loginUser, registerUser, logoutUser, fetchUserFromToken],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
