// fetching products
import axios from "axios";
import fetchApi from "../shared/custom-hooks/useAxios";
import { brands } from "../temp/brands.json";

// export const fetchProducts = async () => {
//   try {
//     const {
//       data: { products },
//     } = await axios.get("/api/products");
//     const {
//       data: { categories },
//     } = await axios.get("/api/categories");

//     return {
//       data: { products, categories, brands },
//       success: true,
//       message: "products fetched successfully",
//     };
//   } catch (e) {
//     return {
//       data: null,
//       success: false,
//       message: "products failed to fetch",
//     };
//   }
// };

export const fetchProducts = async() => {
   const { data, success } = await fetchApi({
    url: "/api/products",
    method: "get",
    propertyName: "products",
  });
  const { data: categoryData, success: categorySuccess } = await fetchApi({
    url: "/api/categories",
    method: "get",
    propertyName: "category",
  });
  if (success && categorySuccess) {
    return {
      data: { products: data.products, categories: categoryData.categories, brands },
      success: true,
      message: "products fetched successfully",
    };
  } else {
    return {
      data: null,
      success: false,
      message: "products failed to fetch",
    };
  }
 
};
