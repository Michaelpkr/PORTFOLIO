export default function Cards (props) {
return(
	<div className="cards">
		<img className="computerCard" src={props.cardData.cards[1].image}/>
		<h3 className="playertag">Computer</h3>
		<img className="playerCard" src={props.cardData.cards[0].image}/>
		<h3 className="playertag">Player</h3>
	</div>
)
}