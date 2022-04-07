import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {fetchProducts,reducer,getSortedData,getFilterdData} from "./index"

const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {
  let intialState = {
    products: [],
    sortBy: null,
    inStock: false,
    fastDelivery: false,
    brands: [],
    selectedBrands:{},
    ratings : null,
    range: 2500,
    categories: [],
    selectedCategories : {}

  };

  const [state, dispatch] = useReducer(reducer, intialState);

  let sortedData = getSortedData(state.products,state);
  let filteredData = getFilterdData(sortedData,state);

  useEffect(() => {
    (async function () {
     
      const { data, success, message } = await fetchProducts();
      if (success) {
        dispatch({
          type: "FETCH_DATA",
          payload: { products: data.products, categories: data.categories ,brands:data.brands},
        });
      } else {
        toast.success("Data fetched successfully");
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products:filteredData, categories:state.categories,state ,dispatch,allProducts:state.products}}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => {
  return useContext(ProductContext);
};
export { useProduct, ProductContextProvider };
