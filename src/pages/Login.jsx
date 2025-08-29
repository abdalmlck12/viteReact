// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // NEW: loading state
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // start loading
    try {
      const response = await apiClient.post("/user/login", { email, password });
      if (response.data) {
        login(response.data); // Store user data
        navigate("/");
      }
    } catch (error) {
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3 bg-gray-100">
      <div className="w-full max-w-xl p-7 space-y-10 rounded-2xl bg-white shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-8" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Button with spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full text-xl py-3 mt-6 rounded-lg shadow-md text-white transition duration-200 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
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
