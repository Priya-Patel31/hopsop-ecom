import React, { useState, createContext, useContext, useEffect,useReducer } from "react";
import { fetchProducts } from "../../services/product_services";
import {reducer} from "./productReducer"

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const intialState = {
    products: [],
  };

  const [{ products }, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    (async function () {
      const { data, success, message } = await fetchProducts();

      if (success) {
        dispatch({ type: "FETCH_DATA", payload: { products: data } });
      } else {
        //TODO : error handling
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => {
  return useContext(ProductContext);
};
export { useProduct, ProductContextProvider };
