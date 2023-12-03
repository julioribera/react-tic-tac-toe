export function checkWinner(board) {
  // Combinaciones ganadoras
  const winningCombinations = [
    // Filas
    [0, 1, 2], // Primera fila
    [3, 4, 5], // Segunda fila
    [6, 7, 8], // Tercera fila
    // Columnas
    [0, 3, 6], // Primera columna
    [1, 4, 7], // Segunda columna
    [2, 5, 8], // Tercera columna
    // Diagonales
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
  ];

  // Recorrer todas las combinaciones para ver si hay un ganador
  for (let i = 0; i < winningCombinations.length; i++) {
    // Obtener la combinación actual
    const combination = winningCombinations[i];

    // Obtener los índices de la combinación actual
    const a = combination[0];
    const b = combination[1];
    const c = combination[2];

    // Comprobar si los valores de los índices a, b y c son iguales
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // Si son iguales, retornar el valor del ganador (X o O)
      return board[a];
    }
  }

  // Si no hay ganador, retornar null
  return null;
}
