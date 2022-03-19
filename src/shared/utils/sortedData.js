const getSortedData = (products, state) => {
  let updatedProducts = [...products];

  function price(originalPrice, discount) {
    return parseInt(originalPrice) - parseInt((originalPrice * discount) / 100);
  }
  if (state.sortBy === "HIGH_TO_LOW") {
    updatedProducts.sort(
      (a, b) =>
        price(b.original_price, b.discount_percent) -
        price(a.original_price, a.discount_percent)
    );
  } else if (state.sortBy === "LOW_TO_HIGH") {
    updatedProducts.sort(
      (a, b) =>
        price(a.original_price, a.discount_percent) -
        price(b.original_price, b.discount_percent)
    );
  }
  return updatedProducts;
};
export { getSortedData };
