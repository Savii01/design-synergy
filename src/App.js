// App.js
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans bg-white dark:bg-gray-900 overflow-x-hidden">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
