export function deriveWinner(gameBoard) {
  // check rows
  for (let row = 0; row < gameBoard.length; row++) {
    const rowValues = gameBoard[row];
    if (
      rowValues[0] === rowValues[1] &&
      rowValues[1] === rowValues[2] &&
      rowValues[0] !== null
    ) {
      return rowValues[0];
    }
  }

  // check columns
  for (let col = 0; col < gameBoard.length; col++) {
    const colValues = gameBoard.map((row) => row[col]);
    if (
      colValues[0] === colValues[1] &&
      colValues[1] === colValues[2] &&
      colValues[0] !== null
    ) {
      return colValues[0];
    }
  }

  // check diagonals
  const diagonal1 = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
  if (
    diagonal1[0] === diagonal1[1] &&
    diagonal1[1] === diagonal1[2] &&
    diagonal1[0] !== null
  ) {
    return diagonal1[0];
  }

  const diagonal2 = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
  if (
    diagonal2[0] === diagonal2[1] &&
    diagonal2[1] === diagonal2[2] &&
    diagonal2[0] !== null
  ) {
    return diagonal2[0];
  }
}

export function deriveActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length > 0) {
    activePlayer = turns[0].player === "X" ? "O" : "X";
  }
  return activePlayer;
}

export function updateGameBoard(Turns) {
  const GameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  for (const turn of Turns) {
    const { square, player } = turn;
    const { row, col } = square;
    GameBoard[row][col] = player;
  }
  return GameBoard;
}
