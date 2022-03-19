const getFilterdData = (sortedData,state) => {
  if (!state.inStock) {
    sortedData = sortedData.filter((elm) => {
      return elm.in_stock === true;
    });
   }
  if (state.fastDelivery) {
    sortedData = sortedData.filter((elm) => {
      return elm.fast_delivery === true;
    });
  }
  if (state.range) {
    sortedData = sortedData.filter((item) => {
      return Number(item.original_price) <= Number(state.range);
    });
  }
  sortedData = sortedData.filter((item) => {
    return item.rating >= state.ratings;
  });
  const isChecked = (value) => {
    return value === true;
  };
  const condition = Object.values(state.selectedCategories).some(isChecked);
  if (condition) {
    sortedData = sortedData.filter((item) => {
      return ( 
        state.selectedCategories[item.category_name]
      );
    });
  }

  const condition1 = Object.values(state.selectedBrands).some(isChecked);
  if (condition1) {
    sortedData = sortedData.filter((item) => {
      return (
        state.selectedBrands[item.brand]
      );
    });
  }
  
  return sortedData;
};

export { getFilterdData };
