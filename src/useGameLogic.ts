import { useState } from "react";
export type Cell = "X" | "O" | null;

export default function useGameLogic() {
  const [history, setHistory] = useState<Cell[][]>([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<Cell>(null);

  const winCombos: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const value = history[step]!;

  function checkWinner(cells: Cell[]) {
    for (let combo of winCombos) {
      const [i, j, k] = combo;
      if (cells[i] && cells[i] === cells[j] && cells[i] === cells[k]) {
        return cells[i];
      }
    }
    return null;
  }

  function handleClick(index: number) {
    if (winner || value[index]) return;

    const copy = [...value];
    copy[index] = turn ? "X" : "O";

    const newHistory = history.slice(0, step + 1);
    newHistory.push(copy);

    setHistory(newHistory);
    setStep(newHistory.length - 1);
    setTurn(!turn);
    setWinner(checkWinner(copy));
  }

  function goToStep(newStep: number) {
    if (newStep < 0 || newStep >= history.length) return;
    setStep(newStep);
    setTurn(newStep % 2 === 0);
    setWinner(checkWinner(history[newStep]!));
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setTurn(true);
    setWinner(null);
  }

  return {
    value,
    turn,
    winner,
    handleClick,
    resetGame,
    history,
    goToStep,
  } as const;
}
