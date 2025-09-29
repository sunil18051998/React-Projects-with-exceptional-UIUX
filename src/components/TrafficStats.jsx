import React from "react";
import "../styles/TrafficStats.css";
import { SlArrowDown } from "react-icons/sl";

const TrafficStats = () => {
  const trafficData = [
    { category: "Female", value: 65, color: "#3b82f6" }, // Blue
    { category: "Male", value: 58, color: "#ef4444" }, // Red
    { category: "45+", value: 42, color: "#139c4f" }, // Blue
    { category: "30+", value: 78, color: "#9411b9ff" }, // Blue
    { category: "20+", value: 85, color: "#ab214cff" }, // Blue
    { category: "15+", value: 35, color: "#082e6aff" }, // Blue
    { category: "10+", value: 25, color: "#7fa314ff" }, // Blue
  ];

  return (
    <div className="traffic-div-container">
      <div className="traffic-stats-card">
        <div className="traffic-header">
          <div className="dflx aic alignend">
            <h2 className="traffic-title">Traffic</h2>
            <div className="filter-container" style={{padding: "5px 8px"}}>
              <div className="dflx aic jcc">
                <span className="filter">All Time</span>
              </div>
              <div className="dflx aic jcc">
                <SlArrowDown size={12} />
              </div>
              
            </div>
          </div>
        </div>

        <div className="traffic-content">
          {trafficData.map((item, index) => (
            <TrafficBar
              key={index}
              category={item.category}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrafficBar = ({ category, value, color }) => {
  return (
    <div className="traffic-bar-container">
      <div className="traffic-category">{category}</div>
      <div className="traffic-bar-wrapper">
        <div
          className="traffic-bar"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        >
          <span className="traffic-value">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficStats;
