import React from "react";
import LineChart from "./LineChart";
import DonutChartCard from "./DonutChartCard";
import RecentOrders from "./RecentOrders";
import "./Central.css";
import TotalIncome from "./TotalIncome";

const Central = () => {
  return (
    <>
      <div className="central-container">
        <LineChart />
        <div className="midrow-container">
          <DonutChartCard />
          <TotalIncome />
        </div>

        <RecentOrders />
      </div>
    </>
  );
};

export default Central;
