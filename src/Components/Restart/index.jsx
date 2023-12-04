import "./index.css";
export const Restart = ({ onClick }) => {
  return (
    <button onClick={onClick} className="square restart">
      Restart
    </button>
  );
};
