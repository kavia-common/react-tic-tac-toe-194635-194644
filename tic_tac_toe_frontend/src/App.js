import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./pages/Game/Game";

/**
 * PUBLIC_INTERFACE
 * App
 * Root component that sets a light/dark data-theme and renders the Game page.
 */
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Respect optional env flag to default dark in certain deployments
    const preferDark = (process.env.REACT_APP_FEATURE_FLAGS || "")
      .toLowerCase()
      .includes("dark_default");
    setTheme(preferDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Game />
      </header>
    </div>
  );
}

export default App;
