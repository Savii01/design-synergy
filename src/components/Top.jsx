// Top.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import Logo from "../Assets/images/LOGO-circle.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { ThemeContext } from "../ThemeContext"; // Import the theme context

function Top() {
  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Function to close the mobile menu
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed w-full h-20 bg-white dark:bg-gray-900 text-black rounded-b-xl dark:text-white border-b border-black dark:border-gray-700 flex justify-between items-center px-4 md:px-8 lg:px-16 z-[1000]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-full bg-black"
          />
          <h2 className="text-[16px] tracking-tighter font-bold md:text-[20px]">
            Design Synergy
          </h2>
        </div>

        {/* Desktop Menu & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex lg:items-center lg:justify-center gap-6 lg:gap-10">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:font-semi-bold hover:text-purple py-2 px-4 dark:hover:text-lightBlue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer hover:font-semi-bold hover:text-purple py-2 px-4 dark:hover:text-lightBlue"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="cursor-pointer hover:font-semi-bold hover:text-purple py-2 px-4 dark:hover:text-lightBlue"
              >
               Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="cursor-pointer hover:font-semi-bold hover:text-purple py-2 px-4 dark:hover:text-lightBlue"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="cursor-pointer hover:font-semi-bold hover:text-purple py-2 px-4 dark:hover:text-lightBlue"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/hireus">
                <button className="text-white text-[16px] bg-black dark:bg-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gradient-purple-blue transition-all">
                  Hire Us
                </button>
              </Link>
            </li>
          </ul>
          {/* Theme Toggle Button for Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaIcons.FaSun size={24} className="hover:text-lightBlue" /> : <FaIcons.FaMoon size={24} className="hover:text-purple" />}
          </button>
        </div>

        {/* Mobile Menu Icons */}
        <div className="flex lg:hidden items-center">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaIcons.FaSun size={24} className="hover:text-lightBlue" /> : <FaIcons.FaMoon size={24} className="hover:text-purple" />}
          </button>
          <AiIcons.AiOutlineMenu
            size={24}
            className="text-black dark:text-white cursor-pointer hover:font-semibold"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-3/4 lg:hidden bg-white dark:bg-gray-900 text-black dark:text-white border-l-2 border-gradient-purple-blue transition-transform duration-300 ease-in-out flex flex-col p-6 z-[1000]`}
      >
        {/* Close Icon */}
        <AiIcons.AiOutlineClose
          size={24}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-6 pt-16">
          <li>
            <Link to="/" className="cursor-pointer text-lg" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer text-lg"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="cursor-pointer text-lg"
              onClick={closeMenu}
            >
             Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="cursor-pointer text-lg"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="cursor-pointer text-lg"
              onClick={closeMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/hireus"
              className="cursor-pointer text-lg"
              onClick={closeMenu}
            >
              Hire Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Top;
