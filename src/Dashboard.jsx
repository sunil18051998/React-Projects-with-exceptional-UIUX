// Dashboard.jsx
import React from "react";
import "./styles/Dashboard.css";
import LeftSidebar from "./components/LeftSidebar";
import Middle from "./components/Middle";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <LeftSidebar />
      <Middle />
      
    </div>
  );
};

export default Dashboard;
