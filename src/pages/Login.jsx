// src/pages/Login.jsx

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full
   flex items-center justify-center p-3 bg-gray-100">
      <div className="w-full max-w-xl p-7 space-y-10 rounded-2xl bg-white shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn btn-primary w-full text-xl py-3 mt-6 rounded-lg shadow-md">
            Login
          </button>
        </form>
        <p className="text-lg text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
