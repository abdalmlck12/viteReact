// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Quizzes from "./pages/Quizzes";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="min-h-screen  flex items-center justify-center bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
            <Route
              path="/quizzes"
              element={<Quizzes/>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
