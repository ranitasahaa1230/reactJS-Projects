const redux = require('redux');//for creating store
const createStore = redux.createStore
const bindActionCreators=redux.bindActionCreators

//action
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function cakeOrdered(){//action creators
    return{
        type:CAKE_ORDERED,
        qty:1
    }
}

//reducer
const initialState={
    noOfCake:10,
    qtyy:1
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCake:state.noOfCake+1,
            }    
        default:
            return state;
    }
}

const store=createStore(reducer);//1
console.log('Initial State', store.getState());//2

console.log(store.dispatch(cakeOrdered()))//3

const unsubscribe=store.subscribe(()=>console.log('updated state', store.getState())) //4=>10

// console.log(store.dispatch({//disadv using here=>more fles more 50 jagah , rather use action creatore
//     type:CAKE_ORDERED,
//     qty:1
// }))//11
// (store.dispatch(cakeOrdered()));//12
// console.log(store.dispatch(cakeOrdered()))//13

const actions=store.bindActionCreators({cakeOrdered},store.dispatch)//1st arg an obj,2nd what we want to bind into
actions.cakeOrdered();//11
actions.cakeOrdered();//12
actions.cakeOrdered();//13

unsubscribe();

console.log(store.dispatch(cakeOrdered()))