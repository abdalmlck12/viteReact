import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    // Optionally redirect to login page after logout
    window.location.href = "/login";
  };

  return (
    <div className="navbar bg-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/quizzes" onClick={toggleMenu}>
                      Quizzes
                    </Link>
                  </li>
                  <li>
                    <Link to="/user-results" onClick={toggleMenu}>
                      All Results
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-white">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" onClick={toggleMenu}>
                      LoginNNN
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={toggleMenu}>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          Quiz App
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/quizzes" className="text-white">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/user-results" className="text-white">
                  All Results
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
