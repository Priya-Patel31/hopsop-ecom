export const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_CART": {
      let index = state.findIndex((product) => {
        return action.payload.product._id === product._id;
      });
      if (index !== -1) {
        let updatedCart = [...state];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...state, { ...action.payload.product, quantity: 1 }];
      }
    }

    case "INCREASE_QUANTITY": {
      const getItemIndex = state.findIndex((item) => {
        return item._id === action.payload.id;
      });
      let updatedCart = [...state];
      if (getItemIndex !== -1) {
        updatedCart[getItemIndex] = {
          ...updatedCart[getItemIndex],
          quantity: updatedCart[getItemIndex].quantity + 1,
        };
      }
      return updatedCart;
    }

    case "DECREASE_QUANTITY": {
      const getItemIndex = state.findIndex((item) => {
        return item._id === action.payload.id;
      });
      let updatedCart = [...state];
      if (getItemIndex !== -1 && updatedCart[getItemIndex].quantity !== 0) {
        updatedCart[getItemIndex] = {
          ...updatedCart[getItemIndex],
          quantity: updatedCart[getItemIndex].quantity - 1,
        };
      }
      return updatedCart;
    }
    
    case "REMOVE_FROM_CART": {
      const updatedCart = state.filter((item) => {
        return item._id !== action.payload.id;
      });
      return updatedCart;
    }
    default:
      return state;
  }
};
