import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) => {
    var i;
    var totalCost = 0;
    for (i = 0; i < basket?.length; i++) {
      totalCost += basket[i].price;
    }
    return totalCost;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={"."}
        decimalSeparator={","}
        suffix={"€"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
