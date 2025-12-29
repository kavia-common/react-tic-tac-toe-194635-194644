import React from "react";
import "./Header.css";

/**
 * PUBLIC_INTERFACE
 * Header
 * Displays app title and subtle environment info (from .env).
 */
export default function Header() {
  const nodeEnv = process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || "development";
  const frontendURL = process.env.REACT_APP_FRONTEND_URL || "";
  return (
    <header className="ttt-header">
      <h1 className="ttt-title">Tic Tac Toe</h1>
      <p className="ttt-subtle">
        Env: {nodeEnv}
        {frontendURL ? ` • ${frontendURL}` : ""}
      </p>
    </header>
  );
}
