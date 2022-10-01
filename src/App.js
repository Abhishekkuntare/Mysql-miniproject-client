import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import React from "react";
import Home from "./components/Home/Home";
import Employee from "./components/Employee/Employee";
import Create_Employee from "./components/Employee/Create_Employee/Create_Employee";
import EmployeeDetails from "./components/Employee/EmployeeDetails/EmployeeDetails";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import About from "./components/About/About";
import Bot from "./components/Bot/Bot";
import EachEmployee from "./components/Employee/EachEmployee/EachEmployee";

const App = () => {
  return (
    <Router>
      <Header />
      <Bot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/create_employee" element={<Create_Employee />} />
        <Route path="/employee_details" element={<EmployeeDetails />} />
        <Route path="/employee/:id" element={<EachEmployee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
