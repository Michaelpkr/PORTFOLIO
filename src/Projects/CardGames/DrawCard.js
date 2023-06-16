export default function DrawCard(props){
const CallCardApi = () => {
	fetch(`https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=2`)
	.then(res => res.json())
	.then(res => props.setCardData(res))
	}

	return(
		<div>
			<button onClick={CallCardApi}>Draw Cards</button>
		</div>
	)
}