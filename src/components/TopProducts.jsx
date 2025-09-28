// components/TopProducts.jsx
import React from "react";
import "./TopProducts.css";

const TopProducts = () => {
  const products = [
    {
      name: "Emerald Velvet",
      price: "$355.90",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      sold: "1,250",
    },
    {
      name: "Velvet Coral",
      price: "$279.00",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      sold: "1,100",
    },
    {
      name: "Rotterdam",
      price: "$329.95",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      sold: "950",
    },
    {
      name: "Happy Yellow",
      price: "$315.50",
      image:
        "https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg",
      sold: "800",
    },
  ];

  return (
    <div className="top-products">
      <h3>Top products</h3>
      {products.map((product, index) => (
        <div key={index} className="top-product-item">
          <div className="product-details dflx" >

              <div className="product-image-container dflx aic">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="productinfo">
                <div className="product-name">
                  <span>{product.name}</span>
                </div>
                <div className="product-sold">
                  <span>{product.sold}</span>
                </div>
              </div>


            <div className="product-price">
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;
