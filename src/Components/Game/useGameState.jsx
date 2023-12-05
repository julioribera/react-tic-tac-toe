import { useState, useEffect } from "react";

export const useGameState = () => {
  const [turn, setTurn] = useState(null);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const restartGame = () => {
    setTurn(null);
    setWinner(null);
    setBoard(Array(9).fill(null));
  };

  const changeTurn = () => {
    setTurn(turn === "X" ? "O" : "X");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
  };

  const checkWinner = () => {
    if (!board.includes(null)) {
      return "Draw";
    }
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const currentWinner = checkWinner();
    if (currentWinner) {
      setWinner(currentWinner);
    } else {
      changeTurn();
    }
  }, [board]);

  return {
    turn,
    winner,
    board,
    restartGame,
    changeTurn,
    updateBoard,
    checkWinner,
  };
};
