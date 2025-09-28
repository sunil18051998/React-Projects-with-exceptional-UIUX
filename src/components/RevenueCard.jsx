// components/RevenueDashboard.jsx
import React from 'react';
import './RevenueCard.css';

const RevenueCard = () => {
  // Line chart data points
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

  const maxValue = 60; // 60k is the max value on y-axis

  // Function to calculate line path for SVG
  const getLinePath = () => {
    const points = chartData.map((point, index) => {
      const x = (index / (chartData.length - 1)) * 100;
      const y = 100 - (point.value / maxValue) * 100;
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')}`;
  };

  // Function to calculate area path for SVG
  const getAreaPath = () => {
    const points = chartData.map((point, index) => {
      const x = (index / (chartData.length - 1)) * 100;
      const y = 100 - (point.value / maxValue) * 100;
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')} L 100,100 L 0,100 Z`;
  };

  return (
    <div className="revenue-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Total revenue</h1>
        </div>
        <div className="header-right">
          <span className="date">10 April, 2024</span>
          <span className="current-value">62.8k</span>
          <button className="period-btn active">Monthly</button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="revenue-stats">
        <div className="revenue-amount">$17,086.92</div>
        <div className="revenue-change">
          <span className="percentage">7.8 34%</span>
        </div>
        <div className="revenue-subtitle">
          Gained $9,721.54 this month
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="chart-section">
        <div className="y-axis">
          <span>60k</span>
          <span>40k</span>
          <span>20k</span>
          <span>0k</span>
        </div>
        
        <div className="line-chart-container">
          <svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            className="line-chart"
          >
            {/* Area fill under the line */}
            <path 
              d={getAreaPath()} 
              className="chart-area"
              fill="url(#areaGradient)"
            />
            
            {/* Main line */}
            <path 
              d={getLinePath()} 
              className="chart-line"
              fill="none"
              strokeWidth="2"
            />
            
            {/* Data points */}
            {chartData.map((point, index) => {
              const x = (index / (chartData.length - 1)) * 100;
              const y = 100 - (point.value / maxValue) * 100;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="1.5"
                  className="data-point"
                />
              );
            })}
            
            {/* Gradient for area fill */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* X-axis labels */}
          <div className="x-axis-labels">
            {chartData.map((point, index) => (
              <span key={index} className="x-label">{point.day}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;