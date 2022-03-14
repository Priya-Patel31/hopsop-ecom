// fetching products
export const fetchProducts = async () => {
  try {
    const response = await (await fetch("/api/products")).json()

    return {
      data: response.products,
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
