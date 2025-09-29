import React from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut, FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import "./LeftSidebar.css";

function Icon({ iconName }) {
  switch (iconName) {
    case "home":
      return <FiHome size={24} className="inline-block mr-2" />;
    case "customers":
      return <FiUsers size={24} className="inline-block mr-2" />;
    case "settings":
      return <FiSettings size={24} className="inline-block mr-2" />;
    case "logout":
      return <FiLogOut size={24} className="inline-block mr-2" />;
    case "orders":
      return <FiShoppingCart size={24} className="inline-block mr-2" />;
    case "products":
      return <FiShoppingBag size={24} className="inline-block mr-2" />;
  }
}

function IndividualLink({ text, activeState }) {
  let activecls = "bg-[#b2e2eb]";
  let hovercls = "hover:bg-[#d5e5e8]";
  if (activeState) {
    return (
      <div className={`dflx aic pd10  rounded-sm ${activecls} cursor-pointer flex`}>
        <div className="dflx  jcc ">
          <Icon iconName={text.toLowerCase()} />
        </div>

        <p className="">
          {text}
        </p>
      </div>
    );
  } else {
    return (
      <div className={`dflx aic pd10  rounded-sm ${hovercls} cursor-pointer flex`}>
        <div className="dflx  jcc ">
          <Icon iconName={text.toLowerCase()} />
          
        </div>
        <p className="">{text}</p>
        
      </div>
    );
  }
}

export default function LeftSidebar() {
  return (
    <>
      <div className="p-4 rounded-lg leftsidebar-container">
        <IndividualLink text="Home" />
        <IndividualLink text="Customers" activeState={true} />
        <IndividualLink text="Orders" />
        {/* <IndividualLink text="Anaalytics" /> */}
        <IndividualLink text="Products" />
        {/* <IndividualLink text="Store" /> */}
        <IndividualLink text="Settings" />
        <IndividualLink text="Logout" />
      </div>
    </>
  );
}
