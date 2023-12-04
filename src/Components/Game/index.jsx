import { Board } from "../Board";
import { Turn } from "../Turn";
import { Restart } from "../Restart";
import { useGameState } from "./useGameState";

export const Game = () => {
  const { turn, setTurn, winner, setWinner, board, setBoard, restartGame } =
    useGameState();

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
