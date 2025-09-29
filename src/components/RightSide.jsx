import React from "react";
import TopProducts from "./TopProducts";
import TrafficStats from "./TrafficStats";
import "./RightSide.css";

export default function RightSide() {
  return (
    <>
      <div className="right-side-container">
        <TopProducts />
        <TrafficStats />
      </div>
    </>
  );
}
