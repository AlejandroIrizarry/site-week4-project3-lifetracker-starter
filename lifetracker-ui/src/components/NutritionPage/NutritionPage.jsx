import * as React from "react";
import "./NutritionPage.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NutritionOverview from "../NutritionOverview/NutritionOverview";
import NutritionNew from "../NutritionNew/NutritionNew";
import NutritionDetail from "../NutritionDetail/NutritionDetail";

export default function NutritionPage(props) {
  return (
    <div className="nutrition-page">
      <div className="nutrition-page-header">
        <div className="nutrition-page-heading">
          <h2 className="nutrition-page-title">Nutrition</h2>
        </div>
      </div>
      {!props.user.email && <Navigate to="/forbidden" replace={true} />}
      <Routes>
        <Route path="/" element={<NutritionOverview />} />
        <Route path="/create" element={<NutritionNew />} />
        <Route path="/id/:nutritionId" element={<NutritionDetail />} />
      </Routes>
    </div>
  );
}
