import { Board } from "../Board";
import { Turn } from "../Turn";
import { useState } from "react";
import { Restart } from "../Restart";

export const Game = () => {
  const [turn, setTurn] = useState(null);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const restartGame = () => {
    setTurn(null);
    setWinner(null);
    setBoard(Array(9).fill(null));
  };

  return (
    <>
      {winner ? (
        <h1>{winner === "Draw" ? "Draw" : `Winner is ${winner}`}</h1>
      ) : (
        <h1>Tic Tac Toe</h1>
      )}

      <Board
        turn={turn}
        setTurn={setTurn}
        winner={winner}
        setWinner={setWinner}
        board={board}
        setBoard={setBoard}
      />
      {winner ? (
        <Restart
          onClick={() => {
            restartGame();
          }}
        />
      ) : (
        <Turn turn={turn} />
      )}
    </>
  );
};
