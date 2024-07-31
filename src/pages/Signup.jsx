// src/pages/Signup.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Changed from username to name
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log({ password, email, name }); // Updated to name
    try {
      const response = await apiClient.post("/user/signup", {
        email,
        password,
        name, // Updated to name
      });

      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3 bg-gray-100">
      <div className="w-full max-w-xl p-7 space-y-10 rounded-xl bg-white shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Updated to name
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name" // Updated to name
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button className="btn btn-primary w-full text-lg py-3 mt-4 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
            Sign Up
          </button>
        </form>
        <p className="text-lg text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
