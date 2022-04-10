import "./App.css";
import { useState } from "react";
import { Header, Home, Login, NotFound } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  const [sidebars, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((prev) => !prev);
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <Routes>
    <Route path="/" element={<Home sidebars={sidebars} handleToggleSidebar={handleToggleSidebar} />}/>
      <Route path="/auth" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </>
  );
}

export default App;
