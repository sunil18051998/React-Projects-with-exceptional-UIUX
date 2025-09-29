import React from "react";
import "../styles/RecentOrders.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GoCheck, GoClock, GoX } from "react-icons/go";

function DeliveryStatusIcon({ status }) {
  if (status == "delivered") {
    return <GoCheck size={15} />;
  } else if (status == "pending") {
    return <GoClock size={15} />;
  } else if (status == "declined") {
    return <GoX size={15} />;
  }
}

export default function RecentOrders() {
  const orders = [
    {
      id: 1,
      productName: "Product A",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      productNumber: "12345",
      paymentStatus: "Paid",
      shipping: "Delivered",
      Date: "2023-10-01",
    },
    {
      id: 2,
      productName: "Product B",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      productNumber: "67890",
      paymentStatus: "Due",
      shipping: "Pending",
      Date: "2023-10-01",
    },
    {
      id: 3,
      productName: "Product C",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      productNumber: "54321",
      paymentStatus: "Paid",
      shipping: "Delivered",
      Date: "2023-10-01",
    },
    {
      id: 4,
      productName: "Product D",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      productNumber: "09876",
      paymentStatus: "Refunded",
      shipping: "Declined",
      Date: "2023-10-01",
    },
  ];
  return (
    <>
      <div className="recent-orders-container">
        <div className="dflx head alignend">
          <div>
            <h3 className="recent-order-text">Recent Orders</h3>
          </div>
          <div className="filter-container">
            <div className="dflx aic jcc">
              <HiAdjustmentsHorizontal />
            </div>
            <div>
              <span className="filter">Filter</span>
            </div>
          </div>
        </div>

        <div className="order-list-container">
          <div className="order-header order-item-container">
            <div className="dflx aic jcc"><p>#</p></div>
            <div className="" style={{marginLeft: '30px'}}><p>Product</p></div>
            <div className=""><p>Product No.</p></div>
            <div className="" style={{marginLeft: '20px'}}><p>Date</p></div>
            <div className="" style={{marginLeft: '20px'}}><p>Status</p></div>
            
            <div className=""><p>Payment</p></div>
          </div>
          {orders.map((order) => {
            let status = order.shipping.toLowerCase();
            let statustyle = {};
            if (status == "delivered") {
              statustyle = {
                color: "rgb(0,192,0)",
                borderColor: "rgb(0,192,0)",
              };
            } else if (status == "pending") {
              statustyle = { color: "#e0bc00", borderColor: "#e0bc00" };
            } else if (status == "declined") {
              statustyle = { color: "#ff0000", borderColor: "#ff0000" };
            }

            return (
              <div key={order.id} className="order-item-container">
                <div className="dflx aic jcc">
                  <p>{order.id}</p>
                </div>
                <div className="dflx aic orderinfo">
                  <div>
                    <img src={`${order.image}`} width={40} height={40} />
                  </div>
                  <div className="ordername">
                    <p>{order.productName}</p>
                  </div>
                </div>
                <div>{order.productNumber}</div>
                <div>{order.Date}</div>
                <div style={{paddingRight: '5px'}}>
                  <div className="dflx aic jcc shipstatus" style={statustyle}>
                    {/* <GoCheck size={15} /> */}
                    <DeliveryStatusIcon status={order.shipping.toLowerCase()} />
                    <p>{order.shipping}</p>
                  </div>
                </div>
                
                <div>{order.paymentStatus}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
