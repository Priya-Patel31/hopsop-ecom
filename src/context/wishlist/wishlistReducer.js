const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_WISHLIST":
      return { ...state, wishlist: action.payload.wishlist };
    case "UPDATE_STATUS":
      return { ...state, status: action.payload.status };
    default:
      return state;
  }
};
export {reducer}
