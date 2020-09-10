import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, parentRef }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
      })
  }

  return (
      <div ref={parentRef} className='checkoutProduct'>
          <img className='checkoutProduct__image' src={image} />

          <div className='checkoutProduct__info'>
              <p className='checkoutProduct__title'>{title}</p>
              <p className="checkoutProduct__price">
                  <strong>{price}</strong>
                  <small>€</small>
              </p>
              <div className="checkoutProduct__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <img
                      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/star_2b50.png"
                      alt=""
                    />
                  ))}
              </div>
              <button onClick={removeFromBasket}>Remove from Basket</button>
          </div>
      </div>
  )
}

export default CheckoutProduct;
