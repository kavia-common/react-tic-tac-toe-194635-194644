import React from "react";
import Square from "../Square/Square";
import "./Board.css";

/**
 * PUBLIC_INTERFACE
 * Board
 * Renders a 3x3 grid of Square components.
 * Props:
 * - board: Array(9) of 'X' | 'O' | null
 * - onMove: (index: number) => void
 * - disabled: boolean to prevent further moves (e.g., game over)
 */
export default function Board({ board, onMove, disabled }) {
  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe Board">
      {board.map((value, idx) => (
        <div key={idx} role="gridcell" className="ttt-cell">
          <Square
            value={value}
            onClick={() => onMove(idx)}
            disabled={disabled || Boolean(value)}
          />
        </div>
      ))}
    </div>
  );
}
