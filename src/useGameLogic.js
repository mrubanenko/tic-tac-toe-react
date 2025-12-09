import { useState } from "react";

export default function useGameLogic() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(cells) {
    for (let combo of winCombos) {
      const [i, j, k] = combo;
      if (cells[i] && cells[i] === cells[j] && cells[i] === cells[k]) {
        return cells[i];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (winner) return;

    const copy = [...value];
    if (copy[index] === null) {
      copy[index] = turn ? "X" : "O";
      setValue(copy);
      setTurn(!turn);
      setWinner(checkWinner(copy));
    }
  }

  function resetGame() {
    setValue(Array(9).fill(null));
    setTurn(true);
    setWinner(null);
  }

  return { value, turn, winner, handleClick, resetGame };
}
