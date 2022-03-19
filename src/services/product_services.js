// fetching products
import { brands } from "../temp/brands.json";

export const fetchProducts = async () => {
  try {
    const { products } = await (await fetch("/api/products")).json();
    const { categories } = await (await fetch("/api/categories")).json();

    return {
      data: { products, categories, brands },
      success: true,
      message: "products fetched successfully",
    };
  } catch (e) {
    return {
      data: null,
      success: false,
      message: "products failed to fetch",
    };
  }
};
