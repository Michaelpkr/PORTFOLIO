export default function Results(props){
let playerCard = convertsValueToNumber(props.cardData.cards[0].value)
let computerCard = convertsValueToNumber(props.cardData.cards[1].value)

function convertsValueToNumber(value){
	if(value === "ACE"){
		return 14
	}else if(value === "KING"){
		return 13
	}else if(value === "QUEEN"){
		return 12
	}else if (value === "JACK"){
		return 11
	}else return Number(value)
}

function determinesResults(playerCard, computerCard){
	if(playerCard > computerCard){
		return "Player Wins!"
	}else if(computerCard > playerCard){
		return"Computer Wins!"
	}else if ((playerCard || computerCard !== 0) && playerCard == computerCard){
		return "War!"
	}
}

return(
	<div className="resultsDiv">
		<span className="results">{determinesResults(playerCard, computerCard)}</span>
	</div>
)
}