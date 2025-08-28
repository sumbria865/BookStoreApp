import React, { useState, useEffect } from "react";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change body background based on mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-pink-100", "text-black");
    } else {
      document.body.classList.add("bg-pink-100", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar */}
      <div
        className={`navbar shadow-sm transition-colors duration-300 px-4 md:px-8 ${
          darkMode ? "bg-gray-800" : "bg-black"
        }`}
      >
        <div className="navbar-start">
          <Link
            to="/"
            className={`btn btn-ghost text-xl font-bold ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            Bookstore
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {["Home", "Course", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  className={`font-bold transition-colors duration-200 ${
                    darkMode
                      ? "text-white hover:text-yellow-400"
                      : "text-white hover:text-pink-400"
                  }`}
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-2 md:gap-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="input w-32 md:w-64 text-gray-700 bg-pink-100 border border-pink-300 placeholder-gray-500 focus:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <Search className="absolute right-2 top-2 text-gray-500" size={18} />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition ${
              darkMode
                ? "bg-gray-200 border-gray-400"
                : "bg-black border-black"
            }`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Login / Logout */}
          <button
            onClick={() => {
              if (isLoggedIn) {
                setIsLoggedIn(false); // logout
              } else {
                document.getElementById("my_modal_3").showModal(); // open modal
              }
            }}
            className="btn btn-sm bg-green-600 hover:bg-red-700 text-white"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          {/* Login Modal */}
          <Login />

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md border transition ${
              darkMode
                ? "bg-gray-200 border-gray-400"
                : "bg-black border-black"
            } ml-2`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden shadow-md px-4 py-2 transition-colors duration-300 ${
            darkMode ? "bg-gray-700" : "bg-black"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {["Home", "Course", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  className={`font-bold transition-colors duration-200 ${
                    darkMode
                      ? "text-white hover:text-yellow-400"
                      : "text-white hover:text-pink-400"
                  }`}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
