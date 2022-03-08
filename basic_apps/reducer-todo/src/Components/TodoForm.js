import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import { v4 } from "uuid";
import { useTodo } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
    const [todoString,setTodoString]=useState("");
    const {dispatch}=useTodo();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a todo");
          }

          const todo={
              id:v4(),
              todoString
          }
          dispatch({
              type:"ADD_TODO",
              payload:todo
          })
          setTodoString("");
    }
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Your next Todo"
              value={todoString}
              onChange={e => setTodoString(e.target.value)}
            />
              <Button
                color="warning"
                //TODO: onclick
              >
                Add
              </Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  };
  
  export default TodoForm;
  


