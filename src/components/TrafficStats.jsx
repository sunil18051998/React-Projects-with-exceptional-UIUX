// components/TrafficStats.jsx
import React from 'react';
import './TrafficStats.css';

const TrafficStats = () => {
  return (
    <div className="traffic-stats">
      <div className="traffic-header">
        <h3>Traffic</h3>
        <span className="traffic-period">All time</span>
      </div>
      
      <div className="traffic-category">
        <div className="gender-stats">
          <div className="gender-item">
            <span>Female</span>
            <div className="stat-bar">
              <div className="bar-fill" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="gender-item">
            <span>Male</span>
            <div className="stat-bar">
              <div className="bar-fill" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="age-stats">
          <div className="age-item">
            <span>45+</span>
            <div className="stat-bar">
              <div className="bar-fill" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="age-item">
            <span>30+</span>
            <div className="stat-bar">
              <div className="bar-fill" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="age-item">
            <span>20+</span>
            <div className="stat-bar">
              <div className="bar-fill" style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficStats;