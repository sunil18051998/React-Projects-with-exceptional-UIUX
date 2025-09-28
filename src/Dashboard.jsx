// Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import RevenueCard from "./components/RevenueCard";
import SalesChart from "./components/SalesChart";
import ProductsSold from "./components/ProductsSold";
import RecentOrders from "./components/RecentOrders";
import TopProducts from "./components/TopProducts";
import TrafficStats from "./components/TrafficStats";
import LeftSidebar from "./components/LeftSidebar";
import Central from "./components/Central";
import RightSide from "./components/RightSide";

const Dashboard = () => {
  return (
    <div className="flex bg-[#dce1e8]">
      <LeftSidebar />
      <Central />
      <RightSide />
    </div>
  );
  //   return (
  //     <div className="dashboard">
  //       <header className="dashboard-header">
  //         <div className="header-left">
  //           <h1>Marketeo</h1>
  //           <nav className="main-nav">
  //             <a href="#" className="nav-active">Home</a>
  //             <a href="#">Customers</a>
  //             <a href="#">Search</a>
  //             <a href="#">Menu</a>
  //           </nav>
  //         </div>
  //         <div className="header-right">
  //           <span>10 April, 2024</span>
  //         </div>
  //       </header>

  //       <div className="dashboard-content">
  //         <div className="dashboard-grid">
  //           {/* Left Column */}
  //           <div className="grid-column">
  //             <RevenueCard />
  //             <SalesChart />
  //           </div>

  //           {/* Middle Column */}
  //           <div className="grid-column">
  //             <ProductsSold />
  //             <RecentOrders />
  //           </div>

  //           {/* Right Column */}
  //           <div className="grid-column">
  //             <TopProducts />
  //             <TrafficStats />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Dashboard;
