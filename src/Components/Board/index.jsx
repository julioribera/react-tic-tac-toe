import { Square } from "./Square";
import "./index.css";

export const Board = ({ turn, winner, board, updateBoard }) => {
  const handleClick = (index) => {
    updateBoard(index);
  };

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square key={index} turn={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};
