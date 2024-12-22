import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import ForgotPass from "./components/LoginPage/ForgotPass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPass />} />
    </Routes>
  );
}

export default App;
