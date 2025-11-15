export default function Status({turn, winner}) {

    return(
        <div className="status">
            {winner===null ? turn ? 'Next Player: X' : 'Next Player: O' : '🎉 Winner: ' + winner + ' 🎉'}
        </div>
    )
}