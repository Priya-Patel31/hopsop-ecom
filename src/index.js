import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/products/productContext";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/cart/cartContext";
import { WishlistContextProvider } from "./context/wishlist/wishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <WishlistContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductContextProvider>
      </WishlistContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
