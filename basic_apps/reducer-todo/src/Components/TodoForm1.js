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

const TodoForm1 = ({addTodos}) => {
    const [todoString,setTodoString]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a todo");
          }

          const todo={
              id:v4(),
              todoString
          }
          addTodos(todo)//method passed as props
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
  
  export default TodoForm1;
  


