import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal({ cart, getCartTotal, onClick }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({cart.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={onClick}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
