export function resetGame({setBoard, setCurrentPlayer, setWinner}) {
  setBoard(Array(9).fill(null));
  setCurrentPlayer("X");
  setWinner(null);
}
