import React from "react";
import "../styles/TotalIncome.css";
import { GoArrowUpRight } from "react-icons/go";

export default function TotalIncome() {
  return (
    <>
      <div className="total-income-container">
        <div className="dflx aic alignend">
          <h3>Total Income</h3>
          <div className="arrowbox dflx aic jcc">
            <GoArrowUpRight size={20} />
          </div>
        </div>
        <div className="" style={{height: '110px'}}>
          <h2>$2,415</h2>
          
        </div>
        <div><p style={{ color: "gray" }}>+2.65% since last week</p></div>
      </div>
    </>
  );
}
