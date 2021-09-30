import React from "react";
import "./Product.css";
function Product({ id, title, fixPrice, image, rating, onClick }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{fixPrice}</strong>
        </p>
        <div className="Product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={onClick}> Add to Basket</button>
    </div>
  );
}

export default Product;
