import {Square} from "./Square";
import {useGame} from "../../Context/GameContext";
import "./index.css";

export const Board = () => {
  const {board, setBoard} = useGame();

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          onClick={() => {
            const newBoard = [...board];
            newBoard[index] = "X";
            setBoard(newBoard);
          }}
        />
      ))}
    </div>
  );
};
