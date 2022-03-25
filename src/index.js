import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/products/productContext";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/cart/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
