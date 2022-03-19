import React, { createContext, useContext, useReducer } from "react";
import { price } from "../../shared/utils/function";
import { reducer } from "./cartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const findItemInCart = (_id) => {
 return cart.some((item) => {
      return item._id === _id;
    });
  };

  const cartSummary = cart.reduce(
    (acc, curr) => {
      return {
        ...acc,
        cartValue: (curr.quantity * curr.original_price )+ acc.cartValue,
        totalDiscount: (curr.quantity * (curr.original_price-price(curr.original_price,curr.discount_percent)))+ acc.totalDiscount,
      };
    },
    { cartValue: 0, totalDiscount: 0 }
  );


  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        findItemInCart,cartSummary
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
