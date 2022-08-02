import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Register from "./containers/register";
import Login from "./containers/login";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar openSidebar={toggle} />
      <Routes>
        <Route path="/signup" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
