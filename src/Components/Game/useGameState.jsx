import { useState } from "react";

export const useGameState = () => {
  const [turn, setTurn] = useState(null);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const restartGame = () => {
    setTurn(null);
    setWinner(null);
    setBoard(Array(9).fill(null));
  };
  return { turn, setTurn, winner, setWinner, board, setBoard, restartGame };
};
