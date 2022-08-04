import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Register from "./containers/register";
import Login from "./containers/login";
import Footer from "./components/Footer";
import Home from "./containers/home";
import Auth from "./utils/auth";
import Historic from "./containers/historic";
import Consultation from "./containers/consultation";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const RequireAuth = ({ children }) => {
    if (!Auth.getInstance().isAuthenticated()) return <Navigate to="/login" />;
    return children;
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar openSidebar={toggle} />
      <Routes>
        <Route path="/signup" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
          exact
        />
        <Route
          path="/historic"
          element={
            <RequireAuth>
              <Historic />
            </RequireAuth>
          }
          exact
        />
        <Route
          path="/consultation/:id"
          element={
            <RequireAuth>
              <Consultation />
            </RequireAuth>
          }
          exact
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
