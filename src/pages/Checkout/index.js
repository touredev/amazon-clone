import React, { forwardRef } from "react";
import "./Checkout.css";
import FlipMove from 'react-flip-move';
import Subtotal from "../../components/Subtotal";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const BasketItem = forwardRef((props, ref) => (
    <CheckoutProduct key={props.id} {...props} parentRef={ref} />
  ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove easing="linear" leaveAnimation="accordionVertical">
            {basket.map(item => (
              <BasketItem {...item}/>
            ))}
          </FlipMove>

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}


export default Checkout;