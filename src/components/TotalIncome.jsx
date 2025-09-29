import React from "react";
import "./TotalIncome.css";

export default function TotalIncome() {
  return (
    <>
      <div className="total-income-container">
        <h3>Total Income</h3>
        <h2>$2,415</h2>
        <p style={{ color: "gray" }}>+2.65% since last week</p>
      </div>
    </>
  );
}
