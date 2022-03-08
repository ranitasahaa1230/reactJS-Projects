import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TodoForm from './Components/TodoForm';
import { useTodo } from './Context/TodoContext';
import Todos from "./Components/Todos";

const App=()=>{
  const {state, dispatch}=useTodo();

  return (
    <div className="App">
       <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </div>
  );
}

export default App;

