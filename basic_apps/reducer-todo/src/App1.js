import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TodoForm1 from './Components/TodoForm1';
import Todos1 from "./Components/Todos1";
import { useEffect, useState } from "react";

const App1=()=>{
  const [todos, setTodos]=useState([]);

  useEffect(()=>{
      const localTodos=localStorage.getItem("todos");
      if(localTodos){
          setTodos(JSON.parse(localTodos))
      }
  },[])

  const addTodos=async todo=>{
      setTodos([...todos,todo]);
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const markComplete=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  return (
    <div className="App1">
       <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos1 todos={todos} markComplete={markComplete}/>
        <TodoForm1 addTodos={addTodos}/>
      </Container>
    </div>
  );
}

export default App1;

