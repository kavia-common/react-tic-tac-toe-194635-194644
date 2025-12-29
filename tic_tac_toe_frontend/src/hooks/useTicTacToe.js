import { useCallback, useMemo, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * useTicTacToe
 * A lightweight hook that manages Tic Tac Toe gameplay for two local players.
 * - Board is a 3x3 array (length 9) with values: 'X' | 'O' | null
 * - Players alternate turns starting with 'X'
 * - Provides helpers to place marks, reset the game, and inspect status
 */
export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Determine winner or draw
  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(
    () => !winner && board.every((c) => c !== null),
    [board, winner]
  );

  // PUBLIC_INTERFACE
  const currentPlayer = useMemo(() => (xIsNext ? "X" : "O"), [xIsNext]);

  // PUBLIC_INTERFACE
  const statusText = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "It's a draw!";
    return `Current turn: ${currentPlayer}`;
  }, [winner, isDraw, currentPlayer]);

  // PUBLIC_INTERFACE
  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  // PUBLIC_INTERFACE
  const handleMove = useCallback(
    (index) => {
      // Ignore clicks if game is over or cell filled
      if (winner || board[index]) return;

      setBoard((prev) => {
        const next = [...prev];
        next[index] = xIsNext ? "X" : "O";
        return next;
      });
      setXIsNext((prev) => !prev);
    },
    [board, winner, xIsNext]
  );

  return {
    board,
    xIsNext,
    currentPlayer,
    winner,
    isDraw,
    statusText,
    handleMove,
    reset,
  };
}

// Determine winning player or null
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diags
    [2, 4, 6],
  ];
  // Check winning combos
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
