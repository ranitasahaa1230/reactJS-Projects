import { createContext, useContext, useReducer } from "react";
import todoReducer from "./reducer";

const TodoContext=createContext();

const TodoProvider=({children})=>{
    const [todos,dispatch]=useReducer(todoReducer,[])

    return(
    <TodoContext.Provider value={{todos,dispatch}}>
        {children}
    </TodoContext.Provider>
            )

}
const useTodo=()=>useContext(TodoContext);
export {TodoProvider, useTodo}

