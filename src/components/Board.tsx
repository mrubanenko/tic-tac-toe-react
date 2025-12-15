import Square from "./Square.js";
import Status from "./Status.js";
import ResetButton from "./ResetButton.js";
import useGameLogic from "../useGameLogic.js";

export default function Board() {
  const { value, turn, winner, handleClick, resetGame, history, goToStep } =
    useGameLogic();

  return (
    <div className="board-container">
      <Status turn={turn} winner={winner} value={value} />
      <div className="board">
        {value.map((cell, i) => (
          <Square
            key={i}
            onClick={() => handleClick(i)}
            value={cell}
            turn={turn}
          />
        ))}
      </div>
      <ResetButton className="reset-button" onReset={resetGame} />

      <div className="history">
        {history.map(
          (_, i) =>
            i > 0 && (
              <button key={i} onClick={() => goToStep(i)}>
                Go to move {i}
              </button>
            )
        )}
      </div>
    </div>
  );
}
