import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  addToWishlistApi,
  removeFromWishlistApi,
  fetchWishlistDataApi,
} from "../../services/wishlist_services";
import { reducer } from "../../context/wishlist/wishlistReducer";
import { addToCartApi } from "../../services/cart_services";
import { useCart } from "../cart/cartContext";
const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { dispatch: dispatchCart } = useCart();
  const [{ status, wishlist }, dispatch] = useReducer(reducer, {
    status: "IDLE",
    wishlist: [],
  });
  useEffect(() => {
    if (status !== "IDLE") return;
    (async function () {
      dispatch({ type: "UPDATE_STATUS", payload: { status: "PENDING" } });
      const { data, success, message } = await fetchWishlistDataApi();
      if (success) {
        dispatch({
          type: "UPDATE_WISHLIST",
          payload: { wishlist: data.wishlist },
        });

        dispatch({ type: "UPDATE_STATUS", payload: { status: "SUCCESS" } });
        return;
      }
      dispatch({ type: "UPDATE_STATUS", payload: { status: "FAILED" } });
    })();
  }, []);

  const addToWishlist = async (product) => {
    const { data, success, message } = await addToWishlistApi(product);
    if (success) {
      dispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: data.wishlist },
      });
      return true;
    }
    return false;
  };

  const removeFromWishlist = async (_id) => {
    const { data, success, message } = await removeFromWishlistApi(_id);
    if (success) {
      dispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: data.wishlist },
      });
      return true;
    }
    return false;
  };

  const moveToCart = async (product) => {
    const { data: cart, success: cartSuccess } = await addToCartApi(product);
    const { data: wishlist, success: wishlistSuccess } =
      await removeFromWishlistApi(product._id);
    if (cartSuccess && wishlistSuccess) {
      dispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: wishlist.wishlist },
      });
      dispatchCart({ type: "UPDATE_CART", payload: { cart: cart.cart } });
      return true;
    }
    return false;
  };
  const findItemInWishlist = (_id) => {
    return wishlist.some((item) => item._id === _id);
  };
  return (
    <WishlistContext.Provider
      value={{ addToWishlist, removeFromWishlist, wishlist, moveToCart,findItemInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  return useContext(WishlistContext);
};
export { WishlistContextProvider, useWishlist };
