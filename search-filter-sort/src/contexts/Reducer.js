
export default function CartReducer(state,action) {
  switch (action.type) {
      case "ADD_TO_CART":
          return {...state,cart:[...state.cart,{...action.payload,qty:1}]} //if qty is not 1, then we dont have to destruc action.payload
          case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter((c)=>c.id!==action.payload.id)}  
      default:
          return state;
  }
}
