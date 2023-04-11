import React, { useEffect } from "react";
import ShippingAddress from "./ShippingAddress";
import ShoppingBag from "./ShoppingBag";
import './Cart.css'
import { useDispatch } from "react-redux";
import { changeName } from "../../features/headerNameSlice";
const Cart = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(changeName('Cart'))
  },[])
  return (
    <div class='cart-container'>
      <ShippingAddress />
      <ShoppingBag/>
    </div>
  );
};

export default Cart;
