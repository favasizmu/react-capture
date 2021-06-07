import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamWork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//
const ServiceSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            High <span>Quality</span>Services{" "}
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img alt="icon" src={clock} />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img alt="icon" src={money} />
                <h3>Cost-Effective</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img alt="icon" src={teamWork} />
                <h3>TeamWork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img alt="icon" src={diaphragm} />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img alt="image" src={home2} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
