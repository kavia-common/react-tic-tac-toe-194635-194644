import React from "react";
import "./StatusBar.css";

/**
 * PUBLIC_INTERFACE
 * StatusBar
 * Displays game status and a button to restart.
 * Props:
 * - status: string (e.g., "Current turn: X", "Winner: O", "It's a draw!")
 * - onRestart: () => void
 */
export default function StatusBar({ status, onRestart }) {
  const isWin = status.startsWith("Winner:");
  const isDraw = status.toLowerCase().includes("draw");

  return (
    <div className="ttt-statusbar">
      <div
        className={`ttt-badge ${
          isWin ? "ttt-badge--success" : isDraw ? "ttt-badge--neutral" : ""
        }`}
        role="status"
        aria-live="polite"
      >
        {status}
      </div>
      <button className="ttt-restart" onClick={onRestart} aria-label="Restart game">
        Restart
      </button>
    </div>
  );
}
