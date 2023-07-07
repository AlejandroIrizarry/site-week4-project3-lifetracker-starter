import * as React from "react";
import "./ActivityFeed.css";
import { Link } from "react-router-dom";
import arrow_up from "../../assets/arrow-up.svg";
import arrow_down from "../../assets/arrow-down.svg";

export default function ActivityFeed(props) {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity Feed</h2>
        <div>
          <Link to="/exercise">
            <button id="exercise-btn" type="button" className="activity-btn">
              Add Exercise
            </button>
          </Link>
          <Link to="/sleep">
            <button id="sleep-btn" type="button" className="activity-btn">
              Log Sleep
            </button>
          </Link>
          <Link to="/nutrition">
            <button id="nutrition-btn" type="button" className="activity-btn">
              Record Nutrition
            </button>
          </Link>
        </div>
      </div>
      <div className="stats">
        <div id="exercise" className="stats-container">
          <div className="stats-header">
            <div>
              <h2 className="stats-title">Total Exercise Minutes</h2>
            </div>
            <div className="stats-space"></div>
          </div>
          <div className="stats-data">
            <div className="stats-data-content">
              <p>0.0</p>
              <div>
                <img src={arrow_up} alt="" />
                <span className="increase">+2.5</span>
              </div>
            </div>
          </div>
        </div>
        <div id="sleep-hours" className="stats-container">
          <div className="stats-header">
            <div>
              <h2 className="stats-title">Average Hours of Sleep</h2>
            </div>
            <div className="stats-space"></div>
          </div>
          <div className="stats-data">
            <div className="stats-data-content">
              <p>0.0</p>
              <div>
                <img src={arrow_down} alt="" />
                <span className="decrease">-2.5%</span>
              </div>
            </div>
          </div>
        </div>
        <div id="nutrition-calories" className="stats-container">
          <div className="stats-header">
            <div>
              <h2 className="stats-title">Average Daily Calories</h2>
            </div>
            <div className="stats-space"></div>
          </div>
          <div className="stats-data">
            <div className="stats-data-content">
              <p>{Math.round(props?.avgCaloriesPerCategory?.calories)}</p>
              <div>
                <img src={arrow_up} alt="" />
                <span className="increase">+5.5%</span>
              </div>
            </div>
          </div>
        </div>
        <div id="more" className="stats-container">
          <div className="stats-header stats-header-more">
            <div>
              <h2 className="stats-title">More Stats</h2>
            </div>
            <div className="stats-space"></div>
          </div>
          <div className="stats-data">
            <div className="stats-data-group">
              <div>
                <dl>
                  <dt className="label">Max Calories In One Meal</dt>
                  <dd className="number">
                    {Math.round(props?.maxCaloriesPerMeal?.calories)}
                  </dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt className="label">Max Calories In One Meal</dt>
                  <dd className="number">0.0</dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt className="label">Max Calories In One Meal</dt>
                  <dd className="number">0.0</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
