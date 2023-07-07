import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { AuthProvider } from "./contexts/auth";
import { NutritionContextProvider } from "./contexts/nutrition";
import { ActivityContextProvider } from "./contexts/activity";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NutritionContextProvider>
        <ActivityContextProvider>
          <App />
        </ActivityContextProvider>
      </NutritionContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
