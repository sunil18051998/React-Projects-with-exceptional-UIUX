import React from "react";
import DonutChartCard from "./DonutChartCard";
import RecentOrders from "./RecentOrders";
import "../styles/Central.css";
import TotalIncome from "./TotalIncome";
import NewLineChart from "./NewLineChart";

const Central = () => {
  return (
    <>
      <div className="central-container">
        {/* <LineChart /> */}
        <NewLineChart />
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
