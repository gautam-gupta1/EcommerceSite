import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./../../features/cartSlice";
import ProductCard from "../../components/ProductCard";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, imageLinks, price,  quantity } = data;


  return (
    <div className="cartItem">
      <ProductCard item={data}/>
      <section className="cartItemButtons">
      <button
        onClick={() => {
          dispatch(removeFromCart({ id }));
        }}
>
        🚮
      </button>
      <button
        onClick={() => {
          dispatch(incrementQuantity({ id }));
        }}
      >
        ➕  
      </button>
      <button
        onClick={() => {
          dispatch(decrementQuantity({ id }));
        }}
      >
        ➖
      </button>
      </section>

    </div>
  );
};

export default memo(CartItem);
