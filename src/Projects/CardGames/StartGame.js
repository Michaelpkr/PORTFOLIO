export default function StartGame(props){

	function clickHandler(props){
	alert("Reset functionality currently in development. Refresh to go back to the Home screen.")
}
	return (
		<div className="drawCards">
			<button className="drawCardsBtn" onClick={clickHandler}>New Game</button>
		</div>
	)
}