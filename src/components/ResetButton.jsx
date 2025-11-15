export default function ResetButton({onReset, className}) {
    return (
        <button onClick={onReset} className={className}>New Game</button>
    )
}