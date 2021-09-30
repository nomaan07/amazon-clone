import React, { useEffect } from "react";
import "./Checkout.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";
import {
  getCartTotal,
  updateQuantity,
  setTotalAmount,
} from "../store/actions/card/cardAction";
import { removeFromCart, setAddtoCard } from "../store/actions/card/cardAction";
function Checkout() {
  const history = useHistory();
  const cardState = useSelector((state) => state.card.items);
  const cardTotal_State = useSelector((state) => state.card.total_amount);
  const dispatch = useDispatch();

  const onRemoveHander = (id) => {
    dispatch(removeFromCart(id));
  };

  const dropDownChangeHandeler = (event, item) => {
    dispatch(updateQuantity(event.target.value, item));
  };

  const onClickHandeler = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      history.push("/login");
    } else {
      alert("order successfully placed");
    }
  };
  useEffect(() => {
    // if (
    //   JSON.parse(localStorage.getItem("cartItem")) != null &&
    //   JSON.parse(localStorage.getItem("cartTotal")) != null
    // ) {
    //   localStorage.setItem("cartItem", JSON.stringify(cardState));
    //   localStorage.setItem("cartTotal", JSON.stringify(cardTotal_State));
    //   console.log(JSON.parse(localStorage.getItem("cartItem")), "cart item");
    //   console.log(JSON.parse(localStorage.getItem("cartTotal")), "totla");
    //   dispatch(setAddtoCard(JSON.parse(localStorage.getItem("cartItem"))));
    //   dispatch(setTotalAmount(JSON.parse(localStorage.getItem("cartTotal"))));
    // }
  }, []);

  useEffect(() => {
    dispatch(getCartTotal(cardState));
  }, [cardTotal_State]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_06-1024x225.png" />
        <hr />

        {!cardState.length ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout"> Your Shopping Basket</h2>
            <hr />
            {cardState.map((item) => (
              <CheckoutProducts
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                fixPrice={item.fixPrice}
                rating={item.rating}
                onClick={() => onRemoveHander(item.id)}
                dropDownChangeHandeler={(event) =>
                  dropDownChangeHandeler(event, item)
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal
          cart={cardState}
          getCartTotal={cardTotal_State}
          onClick={onClickHandeler}
        />
      </div>
    </div>
  );
}

export default Checkout;
