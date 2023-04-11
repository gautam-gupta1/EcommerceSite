import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index == -1) state.cart.push({ ...action.payload, quantity: 1 });
      else state.cart[index].quantity++;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const newCart = state.cart.filter((item) => item.id != action.payload.id);
      state.cart = newCart; 
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (!item) {
        return state;
      } else if (item?.quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCart: (state) => {
      localStorage.removeItem("cart");
      state.cart = [];
    }
  },
});

export const { addToCart, removeFromCart,incrementQuantity,decrementQuantity,emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
