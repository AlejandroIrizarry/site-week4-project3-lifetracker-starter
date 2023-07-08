import "./NutritionCard.css";
import { capitalize } from "lodash";
import food_empty from "../../assets/food-empty.svg";
import { Link } from "react-router-dom";

export default function NutritionCard(props) {
  const handleEmptyImage = (e) => {
    e.target.src = food_empty;
  };

  return (
    <div className="nutrition-card">
      <div className="nutrition-card-content">
        <div className="nutrition-card-header">
          <span className="nutrition-img">
            <img src={props.image} onError={handleEmptyImage} />
          </span>
          <div className="nutrition-card-heading">
            <h2>
              {capitalize(props.name)}
              <span>{capitalize(props.category)}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="nutrition-card-body">
        <div>
          <dl>
            <dt>Calories</dt>
            <dd className="card-description">{props.calories}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Quantity</dt>
            <dd className="card-description">{props.quantity}</dd>
          </dl>
        </div>
      </div>
      <div>
        <h3>{props.created_at}</h3>
      </div>
    </div>
  );
}
