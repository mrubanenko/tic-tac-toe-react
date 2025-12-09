import { useState } from "react";

export default function Square({ value, onClick, turn }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const display = value !== null ? value : isHovered ? (turn ? "X" : "O") : "";
  const style =
    isHovered && value == null ? { color: "rgba(0, 0, 0, 0.5)" } : {};
  return (
    <button
      onClick={() => {
        if (value === null) {
          onClick();
        } else {
          setIsShaking(true);
          setTimeout(() => {
            setIsShaking(false);
          }, 500);
        }
      }}
      className={`square ${isShaking ? "taken" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      {display}
    </button>
  );
}
