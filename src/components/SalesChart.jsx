// components/SalesChart.jsx
import React from 'react';
import './SalesChart.css';

const SalesChart = () => {
  const chartData = [
    { day: 'Apr 7', value: 45 },
    { day: 'Apr 8', value: 52 },
    { day: 'Apr 9', value: 48 },
    { day: 'Apr 10', value: 62 },
    { day: 'Apr 11', value: 58 },
    { day: 'Apr 12', value: 55 },
    { day: 'Apr 13', value: 60 },
    { day: 'Apr 14', value: 62 },
  ];

  const maxValue = 60;

  return (
    <div className="sales-chart">
      <div className="chart-header">
        <span className="chart-value">62.0k</span>
      </div>
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>60k</span>
          <span>40k</span>
          <span>20k</span>
          <span>0k</span>
        </div>
        <div className="chart-bars">
          {chartData.map((item, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="chart-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;