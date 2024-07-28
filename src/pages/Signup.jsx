// src/pages/Signup.jsx

import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="min-h-screen w-full
   flex items-center justify-center p-3 bg-gray-100"
    >
      <div className="w-full max-w-xl p-7 space-y-10 rounded-xl bg-white shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
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
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
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
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
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
