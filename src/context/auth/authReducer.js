export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER": {
      const { isUserLoggedIn, token, user } = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { isUserLoggedIn, token, user };
    }
    default:
      return state;
  }
};
