const getFilterdData = (sortedData, state) => {
  if (!state.inStock) {
    sortedData = sortedData.filter((elm) => elm.in_stock);
  }
  if (state.fastDelivery) {
    sortedData = sortedData.filter((elm) => elm.fast_delivery);
  }
  if (state.range) {
    sortedData = sortedData.filter(
      (item) => Number(item.original_price) <= Number(state.range)
    );
  }
  if(state.ratings !== null && state.ratings !== 1){
  sortedData = sortedData.filter((item) => 
  item.rating >= state.ratings);
  }

  const condition = Object.values(state.selectedCategories).some(
    (value) => value
  );
  if (condition) {
    sortedData = sortedData.filter(
      (item) => state.selectedCategories[item.category_name]
    );
  }

  const condition1 = Object.values(state.selectedBrands).some((value) => value);
  if (condition1) {
    sortedData = sortedData.filter((item) => state.selectedBrands[item.brand]);
  }

  return sortedData;
};

export { getFilterdData };
