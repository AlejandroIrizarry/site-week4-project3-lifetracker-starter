import NutritionFeed from "../NutritionFeed/NutritionFeed";
import * as React from "react";
import "./NutritionOverview.css";
import { Link } from "react-router-dom";
import NutritionContext from "../../contexts/nutrition";
import empty_fridge from "../../assets/empty-fridge.jpg";

export default function NutritionOverview(props) {
  const { nutritionContext } = React.useContext(NutritionContext);
  const [nutritions, setNutritions] = nutritionContext;

  return (
    <div className="nutrition-overview">
      <div className="overview-container">
        <div className="overview-content">
          <div className="nutrition-feed-container">
            <button className="nutrition-create-btn">
              <Link to="/nutrition/create">Record Nutrition</Link>
            </button>
            <NutritionFeed nutritions={nutritions} />
            {!nutritions?.length > 0 ? (
              <img id="empty-fridge" src={empty_fridge} alt="empty fridge" />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
