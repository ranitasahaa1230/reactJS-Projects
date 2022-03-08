
export default function counterFunc(state,action) {
  switch(action.type){
      case "incre":
          return {...state,counter:state.counter+action.payload}
          case "decre":
            return {...state,counter:state.counter-action.payload}
  }
}
