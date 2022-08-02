import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar openSidebar={toggle} />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
