export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((c) => c.id !== action.payload.id),
      };
    
    case "INCREMENT_QTY":
      // console.log(state,action.payload)
        return {
            ...state,
            cart: state.cart.map((item) => {
              return item._id === action.payload ? { ...item, qty: item.qty + 1 } : item;
            })
          };    
    case "DECREMENT_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item._id === action.payload ? { ...item, qty: item.qty - 1 } : item;
        })
      };    
    default:
      return state;
  }
};
