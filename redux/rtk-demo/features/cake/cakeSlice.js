//reducer and action
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 20
}

const cakeSlice=createSlice({
    name:'cakes',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCakes--//uses immer,muattes the state
        },
        restocked: (state,action)=>{
            state.numOfCakes+= action.payload
        },
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions