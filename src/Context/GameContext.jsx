import {createContext, useState, useContext} from "react";

// Crear el contexto
const GameContext = createContext();
export function useGame() {
  return useContext(GameContext);
}

// Crear el proveedor con el estado global
export function GameProvider({children}) {
  // Estado del tablero (array de 3x3)
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado para manejar el turno actual (X o O)
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Estado para determinar si hay un ganador
  const [winner, setWinner] = useState(null);

  // Valores y funciones proporcionados por el contexto
  const value = {
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
