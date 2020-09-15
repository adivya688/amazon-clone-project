import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout__container">
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/GW_HUD/PrimeUP/1222441-ilm_desk--revised_2x._CB432783826_.jpg"
            alt="Advertisement"
          />
        </div>

        <div className="checkout__right">
          <Subtotal />
          {/*<h2> The subtotal go here</h2>*/}
        </div>
      </div>
      <div>
        <h3>{user?.email}</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
      <FlipMove>
        {basket.map((item) => (
        <div key={item.id}>
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
          </div>
        ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Checkout;
