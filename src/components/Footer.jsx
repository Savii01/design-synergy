import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../Assets/images/LOGO-circle.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black dark:bg-gray-800 dark:text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          <div className="flex flex-col">
            {/* Logo / Branding */}
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
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Elevating brands through creativity <br/> & innovation.
            </p>

          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-y-4 justify-start items-start">

          <div className="flex flex-wrap lg:justify-center gap-4 mt-6 md:mt-0">
            <a href="/about" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue  font-semibold transition">About</a>
            <a href="/services" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue  font-semibold transition">Services</a>
            <a href="/projects" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue  font-semibold transition">Projects</a>
            <a href="/contact" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue  font-semibold transition">Contact</a>
          </div>
          <div className="flex flex-wrap lg:justify-center gap-6 mt-2 md:mt-0">
            <a href="/terms" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue transition">Terms</a>
            <a href="/policy" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue transition">Policy</a>
            <a href="/refund" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue transition">Refund</a>
            <a href="/pricing" className="text-black dark:text-gray-300 hover:text-purple dark:hover:text-lightBlue transition">Pricing</a>
          </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="https://web.facebook.com/profile.php?id=61558468053412" className="text-gray-800 dark:text-gray-400 dark:hover:text-lightBlue hover:text-purple transition text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-800 dark:text-gray-400 dark:hover:text-lightBlue hover:text-purple transition text-xl"><FaTwitter /></a>
            <a href="https://www.instagram.com/designsynergy01/" className="text-gray-800 dark:text-gray-400 dark:hover:text-lightBlue hover:text-purple transition text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-800 dark:text-gray-400 dark:hover:text-lightBlue hover:text-purple transition text-xl"><FaLinkedin /></a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Design Synergy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
