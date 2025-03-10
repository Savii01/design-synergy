import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import { ThemeProvider } from "./ThemeContext";
import CursorFollower from "./components/CursorFollower";
import Top from "./components/Top";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import HireUs from "./pages/HireUs";
import Refund from "./pages/Refund";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans bg-white dark:bg-gray-900 overflow-x-hidden">
        <CursorFollower />
        <Top />
        <Routes>
          <Route index element={<Home />} /> {/* This makes Home the default */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="refund" element={<Pricing />} />  
          <Route path="/pricing" element={<Refund />} />
          <Route path="/contact" element={<HireUs/>} /> 
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<PrivacyPolicy/>} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
