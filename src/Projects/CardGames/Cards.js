export default function Cards (props) {
return(
	<div>
		<img width="100px" src={props.cardData.cards[0].image}/>
		<img width="100px" src={props.cardData.cards[1].image}/>
	</div>
)
}