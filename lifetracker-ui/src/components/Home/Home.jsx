import * as React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import tracker from "../../assets/tracker.jpg";
import athlete from "../../assets/athlete.jpg";
import foodimg from "../../assets/food.jpg";
import alarm from "../../assets/alarm.jpg";
import calendar from "../../assets/calendar.jpg";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.svg";
import food from "../../assets/food.svg";
import rest from "../../assets/rest.svg";
import planner from "../../assets/planner.svg";

export default function Home() {
  return (
    <div className="home" id="Home">
      <div className="hero">
        <div className="cta">
          <h1 className="typewriter">LifeTracker</h1>
          <h2>Helping you take back control of your world.</h2>
          <Link to="/register">
            <button>Create your account now</button>
          </Link>
        </div>
        <div className="hero-img">
          <img src={tracker} alt="" />
        </div>
      </div>
      <div className="tiles">
        <div className="tiles-container">
          <Link to="/exercise">
            <div className="tile-header">
              <p>Fitness</p>
              <span>
                <img src={heart} alt="" />
              </span>
            </div>
            <div className="tile-img">
              <img src={athlete} alt="" />
            </div>
          </Link>
        </div>
        <div className="tiles-container">
          <Link to="/nutrition">
            <div className="tile-header">
              <p>Food</p>
              <span>
                <img src={food} alt="" />
              </span>
            </div>
            <div className="tile-img">
              <img src={foodimg} alt="" />
            </div>
          </Link>
        </div>
        <div className="tiles-container">
          <Link to="/sleep">
            <div className="tile-header">
              <p>Rest</p>
              <span>
                <img src={rest} alt="" />
              </span>
            </div>
            <div className="tile-img">
              <img src={alarm} alt="" />
            </div>
          </Link>
        </div>
        <div className="tiles-container">
          <Link to="/activity">
            <div className="tile-header">
              <p>Planner</p>
              <span>
                <img src={planner} alt="" />
              </span>
            </div>
            <div className="tile-img">
              <img src={calendar} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
