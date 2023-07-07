//import ActivityContext from "../../../contexts/activity";
import * as React from "react";
import "./ActivityPage.css";
import { capitalize } from "lodash";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import ActivityContext from "../../contexts/activity";

export default function ActivityPage(props) {
  const { activityContext } = useContext(ActivityContext);
  const [activity, setActivity] = activityContext;
  return (
    <div className="activity-page">
      {!props.user.email && <Navigate to="/forbidden" replace={true} />}
      <div className="activity-content">
        <div className="activity-header">
          <section>
            <br />
            <h1>
              Hola, {capitalize(props.user.first_name)}{" "}
              {capitalize(props.user.last_name)}!
            </h1>
          </section>
          <section></section>
        </div>
      </div>
      <ActivityFeed
        avgCaloriesPerCategory={activity.avgCaloriesPerCategory}
        maxCaloriesPerMeal={activity.maxCaloriesPerMeal}
      />
    </div>
  );
}
