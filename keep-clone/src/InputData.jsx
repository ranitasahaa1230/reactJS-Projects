import React, { useState } from 'react'

export default function InputData() {
  const [todo,setTodo]=useState([]);
  const [input,setInput]=useState("");
  const [text,setText]=useState("");
  const [colour,setColour]=useState("aqua")

  const clickHandler=(e)=>{
    e.preventDefault();
    const id=Math.random();
    setTodo((prev)=>[...prev,{id,input,text}])
  }

  return (
    <div>
        <form className="form-text" style={{backgroundColor:colour}}>
          <input type="text" placeholder="Title" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <br/>
          <textarea placeholder="Take a note..." cols="80" rows="5" value={text} onChange={(e)=>setText(e.target.value)}/>
          <br/>
          <button onClick={clickHandler}>Pin It</button>
          <button type='submit' onClick={clickHandler}>Submit</button>
          <button onClick={()=>setColour("yellow")}>Yellow</button>
          <button onClick={()=>setColour("green")}>Green</button>
          <button onClick={()=>setColour("blue")}>Blue</button>
        </form>
        <div className='todo-flex'>
        {todo.map((todos)=>{
          return(
            <div key={todos.id} className="todo-border">
              <h2>{todos.input}</h2>
              <p>{todos.text}</p>
            </div>
          )
        })}
        </div>
      </div>
  )
}
