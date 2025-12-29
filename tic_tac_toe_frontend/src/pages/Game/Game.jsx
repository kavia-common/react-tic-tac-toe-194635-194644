import React from "react";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import Board from "../../components/Board/Board";
import StatusBar from "../../components/StatusBar/StatusBar";
import Header from "../../components/Header/Header";
import "./Game.css";

/**
 * PUBLIC_INTERFACE
 * Game
 * The main page for playing Tic Tac Toe locally with two players.
 */
export default function Game() {
  const { board, winner, statusText, handleMove, reset } = useTicTacToe();

  return (
    <div className="game-wrap">
      <Header />
      <main className="game-main">
        <StatusBar status={statusText} onRestart={reset} />
        <Board board={board} onMove={handleMove} disabled={Boolean(winner)} />
        <footer className="game-footer">
          <small className="env-hint" aria-label="Environment info">
            API: {process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || "n/a"}
          </small>
        </footer>
      </main>
    </div>
  );
}
