import { Square } from "./Square";
import "./index.css";
import { useEffect } from "react";

export const Board = ({
  turn,
  setTurn,
  winner,
  setWinner,
  board,
  setBoard,
}) => {
  useEffect(() => {
    const currentWinner = checkWinner();
    if (currentWinner) {
      setWinner(currentWinner);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  }, [board]);

  const handleClick = (index) => {
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

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square key={index} turn={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};
