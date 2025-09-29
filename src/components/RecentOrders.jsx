import React from "react";
import "./RecentOrders.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

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
        <div className="dflx head">
          <div>
            <h3 className="recent-order-text">Recent Orders</h3>
          </div>
          <div className="filter-container">
            <div className="dflx aic jcc"><HiAdjustmentsHorizontal /></div>
            <div><span className="filter">Filter</span></div>
          </div>
        </div>

        <div className="order-list-container">
          {orders.map((order) => (
            <div key={order.id} className="order-item-container">
              <div>{order.id}</div>
              <div
                className="dflx aic"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <img src={`${order.image}`} width={40} height={40} />
                </div>
                <div>{order.productName}</div>
              </div>
              <div>{order.Date}</div>
              <div>{order.shipping}</div>
              <div>{order.productNumber}</div>
              <div>{order.paymentStatus}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
