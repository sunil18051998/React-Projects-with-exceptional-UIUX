import React from 'react';
import './DonutChartCard.css';

const DonutChartCard = () => {
  const products = [
    { name: 'Stools', sales: 2038, color: '#3b82f6' },
    { name: 'Chairs', sales: 1500, color: '#10b981' },
    { name: 'Sofas', sales: 1200, color: '#f59e0b' },
    { name: 'Tables', sales: 800, color: '#ef4444' }
  ];

  const totalSales = products.reduce((sum, product) => sum + product.sales, 0);

  return (
    <div className="donut-chart-card">
      <div className="sales-card-header">
        <h3 className="sales-card-title">Product sold</h3>
        {/* <div className="total-sales-badge">Total: {totalSales.toLocaleString()}</div> */}

        <div className="products-legend">
        {products.map((product, index) => {
          const percentage = (product.sales / totalSales) * 100;
          return (
            <div key={index} className="legend-item">
              <div className="legend-info">
                <div className="legend-color" style={{ backgroundColor: product.color }}></div>
                <span className="legend-name">{product.name}</span>
              </div>
              
            </div>
          );
        })}
      </div>
      </div>
      
      <div className="chart-container">
        <DonutChart products={products} totalSales={totalSales} />
        
        <div className="chart-center">
          <div className="sales-number">2,038</div>
          <div className="sales-period">April</div>
        </div>
      </div>
      
      
    </div>
  );
};

const DonutChart = ({ products, totalSales }) => {
  const circumference = 2 * Math.PI * 45; // Radius of 45
  let currentOffset = 0;

  return (
    <svg className="donut-chart" width="150" height="150" viewBox="0 0 120 120">
      {products.map((product, index) => {
        const percentage = (product.sales / totalSales) * 100;
        const segmentLength = ((percentage / 100) * circumference)-12;
        const strokeDasharray = `${segmentLength} ${circumference}`;
        
        const segment = (
          <circle
            key={index}
            className="donut-segment"
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke={product.color}
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={-currentOffset}
            strokeLinecap="round"
          />
        );
        
        currentOffset += segmentLength+12;
        return segment;
      })}
      
      {/* Background circle */}
      {/* <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#f3f4f6"
        strokeWidth="10"
      /> */}
    </svg>
  );
};

export default DonutChartCard;