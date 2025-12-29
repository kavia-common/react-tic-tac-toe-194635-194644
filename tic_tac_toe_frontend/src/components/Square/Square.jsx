import React from "react";
import "./Square.css";

/**
 * PUBLIC_INTERFACE
 * Square
 * A single grid button representing one cell of the tic tac toe board.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 */
export default function Square({ value, onClick, disabled }) {
  return (
    <button
      className="ttt-square"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${value ?? "empty"}`}
    >
      {value}
    </button>
  );
}
