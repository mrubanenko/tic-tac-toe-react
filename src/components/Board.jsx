import Square from "./Square";
import Status from "./Status";
import ResetButton from "./ResetButton";
import useGameLogic from "../useGameLogic";

export default function Board() {

    const { value, turn, winner, handleClick, resetGame } = useGameLogic();

    return(
    <div className="board-container">
        <Status turn={turn} winner={winner}/>
        <div className="board">
            {value.map((num, index) => (
            <Square key={index} onClick={() => handleClick(index)} value={num}/>
        ))}
        </div>
        <ResetButton className='reset-button' onReset={resetGame} />
    </div> )
}