import {Square} from "./Square";
import {Turn} from "./Turn";
import "./index.css";

export const Board = () => {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Turn />
    </div>
  );
};
