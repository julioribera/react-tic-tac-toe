import {Board} from "../Board";
import {Turn} from "../Turn";

export const Game = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board />
      <Turn />
    </>
  );
};
