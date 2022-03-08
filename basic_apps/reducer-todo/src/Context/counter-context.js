import { createContext, useReducer } from "react";
import counterFunc from "./counterFunc";
import { useContext } from "react";

const CounterContext=createContext(null);

const CounterProvider=({children})=>{
const [state,dispatch]=useReducer(counterFunc,{counter:0})
    return(
    <CounterContext.Provider value={{state, dispatch}}>
        {children}
    </CounterContext.Provider>
    )
}
const useCounter=()=>useContext(CounterContext)

export {CounterProvider, useCounter}