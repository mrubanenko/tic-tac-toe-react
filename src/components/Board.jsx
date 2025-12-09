import Square from "./Square";
import Status from "./Status";
import ResetButton from "./ResetButton";
import useGameLogic from "../useGameLogic";

export default function Board() {
  const { value, turn, winner, handleClick, resetGame } = useGameLogic();

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
    </div>
  );
}
