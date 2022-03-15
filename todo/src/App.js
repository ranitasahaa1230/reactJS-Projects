import './App.css';
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updateTodos=todos.map((item)=>item.id===editTodo.id ? (item={id:item.id,todo}) : ({id:item.id,todo:item.todo})
      )
      setTodos(updateTodos);
      setEditID(0);
      setTodo('')
      return;
    }
    if(todo!==""){
      const id=Math.random();
    // setTodos((prev)=>[...prev,{id,todo}])
    setTodos((prev)=>prev.concat({id,todo}))
    setTodo('');
    }
  }
;
  const deleteHandler=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  const editHandler=(id)=>{
    const editTodos=todos.find((elem)=>elem.id===id)
    setTodo(editTodos.todo)
    setEditID(id)
  }
  return (
    <div className="App">
        <h1>Todo App</h1>
       <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
      />
      <TodoList key={todo.id}
        todos={todos}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
       />
    </div>
  );
}

export default App;

