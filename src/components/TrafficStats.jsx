import React from "react";
import "./TrafficStats.css";

const TrafficStats = () => {
  const trafficData = [
    { category: "Female", value: 65, color: "#3b82f6" }, // Blue
    { category: "Male", value: 58, color: "#ef4444" }, // Red
    { category: "45+", value: 42, color: "#3b82f6" }, // Blue
    { category: "30+", value: 78, color: "#3b82f6" }, // Blue
    { category: "20+", value: 85, color: "#3b82f6" }, // Blue
    { category: "15+", value: 35, color: "#3b82f6" }, // Blue
    { category: "10+", value: 25, color: "#3b82f6" }, // Blue
  ];

  return (
    <div className="traffic-div-container">
      <div className="traffic-stats-card">
        <div className="traffic-header">
          <h2 className="traffic-title">Traffic</h2>
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
