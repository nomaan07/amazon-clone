import React from "react";
import "./CheckoutProdcuts.css";
function CheckoutProducts({
  id,
  image,
  title,
  rating,
  fixPrice,
  onClick,
  dropDownChangeHandeler,
}) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{fixPrice}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>

        <div className="expenses-filter">
          <div className="expenses-filter__controlq">
            <select onChange={dropDownChangeHandeler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <button onClick={onClick}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
