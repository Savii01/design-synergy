import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import Logo from "../Assets/images/LOGO-circle.png";
import * as AiIcons from "react-icons/ai";

function Top() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to close menu when clicking outside
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="fixed w-full h-20 bg-white text-black border-b border-black flex justify-between items-center px-4 md:px-8 lg:px-16 z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 border-5 rounded-full bg-black h-10" />
          <h2 className="text-[16px] font-bold md:text-[20px]">Design Synergy</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex md:items-center md:justify-center gap-6 lg:gap-10">
            <li>
              <Link to="/" className="cursor-pointer hover:text-purple py-2 px-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-purple py-2 px-4">
                About
              </Link>
            </li>
            <li>
              <Link to="/process" className="cursor-pointer hover:text-purple py-2 px-4">
                Process
              </Link>
            </li>
            <li>
              <Link to="/projects" className="cursor-pointer hover:text-purple py-2 px-4">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="text-white text-[16px] bg-black font-bold py-2 px-4 rounded-md hover:bg-gradient-purple-blue transition-all">
                  Hire Us
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <AiIcons.AiOutlineMenu size={24} className="text-black md:hidden cursor-pointer" onClick={() => setShowMenu(true)} />
      </div>

      {/* Black Blur Overlay - Covers the whole screen */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu - Slides in from the RIGHT */}
      <div
        className={`${
          showMenu ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:hidden bg-white text-black border-l-2 border-gradient-purple-blue transition-transform duration-300 ease-in-out flex flex-col p-6 z-50`}
      >
        {/* Close Icon */}
        <AiIcons.AiOutlineClose size={24} className="absolute top-5 right-5 cursor-pointer" onClick={closeMenu} />

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-6 pt-16">
          <li>
            <Link to="/" className="cursor-pointer text-lg" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer text-lg" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/process" className="cursor-pointer text-lg" onClick={closeMenu}>
              Process
            </Link>
          </li>
          <li>
            <Link to="/projects" className="cursor-pointer text-lg" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer text-lg" onClick={closeMenu}>
              Hire Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Top;
