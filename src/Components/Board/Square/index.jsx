import "./index.css";

export const Square = ({ turn, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <h1>{turn}</h1>
    </div>
  );
};
