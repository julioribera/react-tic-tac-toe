import {Game} from "../Components/Game";
import {Winner} from "../Components/Winner";
import {useGame} from "../Context/GameContext";
import "./index.css";

function App() {
  const {winner, setWinner} = useGame();

  return (
    <section className="layout">
      {winner ? <Winner /> : <Game />}
      <button onClick={() => setWinner(!winner)}>♻️</button>
    </section>
  );
}

export default App;
