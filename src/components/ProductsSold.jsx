// components/ProductsSold.jsx
import React from 'react';
import './ProductsSold.css';

const ProductsSold = () => {
  const products = [
    { name: 'Stools', value: 35, color: '#4f46e5' },
    { name: 'Sofas', value: 25, color: '#10b981' },
    { name: 'Chairs', value: 20, color: '#f59e0b' },
    { name: 'Tables', value: 20, color: '#ef4444' },
  ];

  return (
    <div className="products-sold">
      <div className="products-header">
        <h3>Product sold</h3>
        <span className="products-count">2,038</span>
        <span className="products-month">April</span>
      </div>
      <div className="products-chart">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-info">
              <div 
                className="product-color" 
                style={{ backgroundColor: product.color }}
              ></div>
              <span>{product.name}</span>
            </div>
            <span className="product-value">{product.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSold;