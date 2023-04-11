import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingBagItems from "./ShoppingBagItems";

const ShoppingBag = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout", { state: cart });
  };
  const handleCancel = () => {};
  return (
    <div className="shoppingBag">
      <h1>Shopping Bag:</h1>
      <ul>
        {cart.map((item) => (
          <ShoppingBagItems key={item.id} data={item} />
        ))}
      </ul>

      {cart.length > 0 ? (
        <>
          <h2>Payment Info</h2>
          <div className="paymentInfoContainer">
            <div>
              {" "}
              <p>Item price</p>
              <p>₹ {totalPrice}</p>{" "}
            </div>
            <div>
              <p>Tax</p>
              <p>₹ {(totalPrice * 0.05).toFixed(2)}</p>
            </div>
            <div>
              {" "}
              <p>Shipping charges</p> <p>₹ {totalPrice ? 75 : 0}</p>
            </div>
            <hr />
            <div>
              <p>Total price</p>
              <p>₹ {totalPrice ? (75 + totalPrice * 1.05).toFixed(2) : 0}</p>
            </div>
          </div>
          <button className="blueButton" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <h2>Add Books To Your Shopping Cart!</h2>
      )}
    </div>
  );
};

export default ShoppingBag;
