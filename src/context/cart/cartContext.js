import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import {
  getCartApi,
  addToCartApi,
  updateQuantityApi,removeFromCartApi
} from "../../services/cart_services";
import { price } from "../../shared/utils/function";
import { reducer } from "./cartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  useEffect(() => {
    if (status !== "IDLE") return;
    (async function () {
      dispatch({ type: "UPDATE_STATUS", payload: { status: "PENDING" } });
      const { data, success, message } = await getCartApi();

      if (success) {
        dispatch({ type: "UPDATE_CART", payload: { cart: data.cart } });
        dispatch({ type: "UPDATE_STATUS", payload: { status: "SUCCESS" } });
      }
      dispatch({ type: "UPDATE_STATUS", payload: { status: "FAILED" } });
    })();
  }, []);

  const [{ cart, status }, dispatch] = useReducer(reducer, {
    cart: [],
    status: "IDLE",
  });
  const findItemInCart = (_id) => 
     cart.some((item) =>  item._id === _id
  )
  };

  const cartSummary = cart.reduce(
    (acc, curr) => {
      return {
        ...acc,
        cartValue: curr.qty * curr.original_price + acc.cartValue,
        totalDiscount:
          curr.qty *
            (curr.original_price -
              price(curr.original_price, curr.discount_percent)) +
          acc.totalDiscount,
      };
    },
    { cartValue: 0, totalDiscount: 0 }
  );

  const addToCart = async (item) => {
    const { data, success } = await addToCartApi(item);
    if (success) {
      dispatch({ type: "UPDATE_CART", payload: { cart: data.cart } });
      return true;
    }
    return false;
  };

  const updateQuantity = async (_id, increment) => {
    const { data, success } = await updateQuantityApi(_id, increment);
    if (success) {
      dispatch({ type: "UPDATE_CART", payload: { cart: data.cart } });
      return true;
    }
    return false;
  };
  const removeFromCart = async(_id) =>{
    const {data,success} = await removeFromCartApi(_id);
    if (success) {
      dispatch({ type: "UPDATE_CART", payload: { cart: data.cart } });
      return true;
    }
    return false;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        findItemInCart,
        cartSummary,
        addToCart,updateQuantity,removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
