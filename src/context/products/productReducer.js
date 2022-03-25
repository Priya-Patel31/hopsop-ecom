export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      const updatedState = {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories,
        selectedCategories: action.payload.categories.reduce((acc, curr) => {
          return { ...acc, [curr.category_name]: false };
        }, {}),

        brands: action.payload.brands,
        selectedBrands: action.payload.brands.reduce((acc, curr) => {
          return { ...acc, [curr.name]: false };
        }, {}),
      };
      return { ...updatedState, intialState: updatedState };
    }

    case "SORT":
      return { ...state, sortBy: action.payload.value };

    case "BRANDS":
      let updatedBrands = { ...state.selectedBrands };
      updatedBrands[action.payload.key] = action.payload.value;
      return { ...state, selectedBrands: updatedBrands };

    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, inStock: action.payload.value };

    case "FAST_DELIVERY":
      return { ...state, fastDelivery: action.payload.value };

    case "RANGE":
      return { ...state, range: action.payload.value };

    case "RATINGS":
      return { ...state, ratings: action.payload.value };

    case "CATEGORIES":
      let updatedCategories = { ...state.selectedCategories };
      updatedCategories[action.payload.key] = action.payload.value;
      return { ...state, selectedCategories: updatedCategories };

    case "RESET_FILTER":
      return { ...state.intialState, intialState: state.intialState };

    default:
      console.log(`Case : ${action.payload.type} not found`);
      return state;
  }
};
