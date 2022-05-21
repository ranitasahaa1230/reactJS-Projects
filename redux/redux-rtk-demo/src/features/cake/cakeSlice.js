//reducer and action
import {createSlice} from '@reduxjs/toolkit';

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

export default cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions
