import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/products/productContext";
import MockAPI from "./mockMan";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
