// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./courses/courses";
import Signup from "./components/signup";
import Login from "./components/Login";
import ContactPage from "./contact/ContactPage";
import AboutPage from "./About/AboutPage";





export default function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      

<Route path="/contact" element={<ContactPage />} />
<Route path="/about" element={<AboutPage />} />



    </Routes>
    </>
  );
}
