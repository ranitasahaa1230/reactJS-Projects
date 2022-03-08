// import {ADD_TODO} from "./action.types";
// import {REMOVE_TODO} from "./action.types"

// export default function todoReducer(state,action) {
//     switch (action.type) {
//         case "ADD_TODO":
//             return [...state,action.payload];
//             case "REMOVE_TODO":
//               return state.filter((todo)=>todo.id!==action.payload);
//         default:
//             return state;
//     }
//   }
  
import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};
