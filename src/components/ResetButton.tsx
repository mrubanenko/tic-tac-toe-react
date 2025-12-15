type ResetButtonProps = {
  onReset: () => void;
  className?: string;
}

export default function ResetButton({ onReset, className }: ResetButtonProps) {
  return (
    <button onClick={onReset} className={className}>
      New Game
    </button>
  );
}
