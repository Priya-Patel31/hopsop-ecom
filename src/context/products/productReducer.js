export const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, products: action.payload.products };
      default:
        return state;
    }
  };
