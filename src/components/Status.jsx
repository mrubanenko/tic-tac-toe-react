export default function Status({ turn, winner, value }) {
  let message;

  if (winner) {
    message = `🎉 Winner: ${winner} 🎉`;
  } else if (value.every((cell) => cell !== null)) {
    message = "It's a draw!";
  } else {
    message = `Next Player: ${turn ? "X" : "O"}`;
  }
  return <div className="status">{message}</div>;
}
