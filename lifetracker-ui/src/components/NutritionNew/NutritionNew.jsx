import * as React from "react";
import "./NutritionNew.css";
import NutritionForm from "../NutritionForm/NutritionForm";

export default function NutritionNew() {
  return (
    <>
      <div className="nutrition-new-header">
        <div className="nutrition-new-heading">
          <h2 className="nutrition-new-title">Nutrition</h2>
        </div>
      </div>

      <div>
        <NutritionForm />
      </div>
    </>
  );
}
