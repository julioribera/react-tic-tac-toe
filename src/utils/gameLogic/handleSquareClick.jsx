import {checkWinner} from "./checkWinner";

export function handleSquareClick({
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
  winner,
  setWinner,
  index,
}) {
  if (board[index] || winner) {
    // Si la casilla ya está ocupada o si ya hay un ganador, no hacer nada
    return;
  }

  // Actualizar el tablero
  const newBoard = [...board];
  newBoard[index] = currentPlayer;
  setBoard(newBoard);

  // Comprobar si hay un ganador
  const newWinner = checkWinner(newBoard);
  if (newWinner) {
    setWinner(newWinner);
    return;
  }

  // Cambiar el turno
  setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
}
