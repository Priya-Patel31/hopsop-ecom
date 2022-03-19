// fetching products
import fetchApi from "../shared/utils/fetchApi";
import { brands } from "../temp/brands.json";

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
