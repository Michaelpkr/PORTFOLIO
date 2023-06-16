export default function StartGame(props){
	function startGame(){
		alert("new game")
	}

	return(
			<div className="newGame">
				<button onClick={startGame}>New Game</button>
			</div>
		)
	}