// components/RecentOrders.jsx
import React from 'react';
import './RecentOrders.css';

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      product: 'Barhat blue',
      date: 'May 5',
      status: 'Received',
      price: '$359.90',
      customer: 'M-Starlight'
    },
    {
      id: 2,
      product: 'Soft Ginger',
      date: 'May 4',
      status: 'Received',
      price: '$420.78',
      customer: 'Serene W'
    }
  ];

  return (
    <div className="recent-orders">
      <h3>Recent order</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.date}</td>
              <td>
                <span className="status-badge received">{order.status}</span>
              </td>
              <td>{order.price}</td>
              <td>{order.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;