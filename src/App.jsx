import { useState } from "react";

import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import * as helper from "./utils.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
function App() {
  const [Turns, setTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  let activePlayer = helper.deriveActivePlayer(Turns);

  let gameBoard = helper.updateGameBoard(Turns);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setTurns((prevLog) => {
      let currentPlayer = helper.deriveActivePlayer(prevLog);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevLog,
      ];
    });
  };

  const handleReset = () => {
    setTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };
  let winner = helper.deriveWinner(gameBoard);
  let winnerSymbol = winner;
  let winnerName = winnerSymbol ? players[winnerSymbol] : null;
  const draw = Turns.length === 9 && !winner;
  console.log(winnerName, winnerSymbol);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver
            name={winnerName}
            symbol={winnerSymbol}
            onReset={handleReset}
          />
        )}
        <GameBoard
          onSelectSquare={handleSelectedSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log turns={Turns} />
    </main>
  );
}

export default App;
