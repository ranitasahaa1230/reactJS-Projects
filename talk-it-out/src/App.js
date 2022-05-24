import "./styles/App.scss";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./componentss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigation />}/>
        {/* <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main> */}
      </Routes>
    </div>
  );
}

export default App;
