const store = require("./app/store");
const icecreamActions = require("./features/ice-cream/icecreamSlice").icecreamActions;
const cakeActions  = require("./features/cake/cakeSlice").cakeActions

console.log('Initial State', store.getState());

store.dispatch(cakeActions.ordered())

// const unsubscribe=store.subscribe(()=>console.log('updated state', store.getState()))
const unsubscribe=store.subscribe(()=>{})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(6))


unsubscribe()