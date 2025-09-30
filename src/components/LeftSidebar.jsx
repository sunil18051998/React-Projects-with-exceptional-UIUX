import React from "react";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiShoppingCart,
  FiShoppingBag,
} from "react-icons/fi";
import { FcComboChart } from "react-icons/fc";
import "../styles/LeftSidebar.css";

function Icon({ iconName }) {
  switch (iconName) {
    case "home":
      return <FiHome size={20} className="inline-block mr-2" />;
    case "customers":
      return <FiUsers size={20} className="inline-block mr-2" />;
    case "settings":
      return <FiSettings size={20} className="inline-block mr-2" />;
    case "logout":
      return <FiLogOut size={20} className="inline-block mr-2" />;
    case "orders":
      return <FiShoppingCart size={20} className="inline-block mr-2" />;
    case "products":
      return <FiShoppingBag size={20} className="inline-block mr-2" />;
  }
}

function IndividualLink({ text, activeState, ordercount }) {
  let activecls = "bg-[#b2e2eb]";
  let hovercls = "hover:bg-[#d5e5e8]";
  let logoutcls = (text == "Logout") ? "logoutcls" : '';
  if (activeState) {
    return (
      <div
        className={`dflx aic pd10  rounded-lg ${activecls} cursor-pointer flex`}
      >
        <div className="dflx aic ">
          <div className="dflx  jcc ">
            <Icon iconName={text.toLowerCase()} />
          </div>
          <p className="fs13 mleft">{text}</p>
        </div>

        {ordercount > 0 && text == "Orders" && (
          <div className="order-count dflx aic jcc">
            <p>{ordercount}</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={`dflx aic pd10  rounded-lg ${hovercls} cursor-pointer flex alignend ${logoutcls}`}
      >
        <div className="dflx aic ">
          <div className="dflx  jcc ">
            <Icon iconName={text.toLowerCase()} />
          </div>
          <p className="fs13 mleft">{text}</p>
        </div>

        {ordercount > 0 && text == "Orders" && (
          <div className="order-count dflx aic jcc">
            <p>{ordercount}</p>
          </div>
        )}
      </div>
    );
  }
}

export default function LeftSidebar() {
  return (
    <>
      <div className="p-4 rounded-lg leftsidebar-container">
        <div className="company-info-container-leftside">
          <div className="company-logo"><FcComboChart size={30} /></div>
          <div className="company-name"><h2>New Company</h2></div>
        </div>
        <div>
          <IndividualLink text="Home" activeState={true} />
        <IndividualLink text="Customers"  />
        <IndividualLink text="Orders" activeState={false} ordercount="12" />
        <IndividualLink text="Products" />
        <IndividualLink text="Settings" />
        <IndividualLink text="Logout" />
        </div>
        
      </div>
    </>
  );
}
