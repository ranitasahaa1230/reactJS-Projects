import React from "react";

function TodoList({ todos, editHandler, deleteHandler }) {
  return todos.map((todo) => {
    return (
      <div key={todo.id}>
        <p>{todo.todo}</p>
        <button onClick={() => editHandler(todo.id)}>Edit</button>
        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
      </div>
    );
  });
}

export default TodoList;
