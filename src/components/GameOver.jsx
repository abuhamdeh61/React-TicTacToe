export default function GameOver({ symbol, name, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{symbol ? `${name} (${symbol}) wins!` : "It's a draw!"}</p>
      <button onClick={onReset}>Play again?</button>
    </div>
  );
}
