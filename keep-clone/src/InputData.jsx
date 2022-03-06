import React, { useState } from 'react'

export default function InputData() {
  const [todo,setTodo]=useState([]);
  const [input,setInput]=useState("");
  const [text,setText]=useState("");

  const clickHandler=(e)=>{
    e.preventDefault();
    const id=Math.random();
    setTodo((prev)=>[...prev,{id,input,text}])
  }

  return (
    <div>
        <form className="form-text">
          <input type="text" placeholder="Title" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <br/>
          <textarea placeholder="Take a note..." cols="80" rows="5" value={text} onChange={(e)=>setText(e.target.value)}/>
          <br/>
          <button type="submit" onClick={clickHandler}>Submit</button>
        </form>
        <div className='todo-flex'>
        {todo.map((todos)=>{
          return(
            <div key={todos.id} className="todo-border">
              <p>{todos.input}</p>
              <p>{todos.text}</p>
            </div>
          )
        })}
        </div>
      </div>
  )
}
