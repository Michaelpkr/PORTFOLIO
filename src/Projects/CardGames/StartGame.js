export default function StartGame(props){
	const startNewGame = () => {
	fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(res => res.json())
	.then(res => props.setDeckId(res.deck_id))
		}

		return(
			<div>
				<button onClick={startNewGame}>New Game</button>
			</div>
		)
	}