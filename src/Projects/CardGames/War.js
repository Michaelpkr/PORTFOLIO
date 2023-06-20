import React, { useState } from "react"
import { useEffect } from "react"
import DrawCard from "./DrawCard"
import Cards from "./Cards"
import Results from "./Results"
import StartGame from "./StartGame"


export default function War () {
const [deckId, setDeckId] = useState("")
const [gameState, setsGameState] = useState(true)
const [cardData, setCardData] = useState({cards:[
	{
	value: "",
	image: "https://opengameart.org/sites/default/files/card%20back%20blue.png"
	},
	{
	value: "",
	image: "https://opengameart.org/sites/default/files/card%20back%20blue.png"
	}
]

})

useEffect(() => {
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(res => res.json())
	.then(res => setDeckId(res.deck_id))
}, [])


	return (
		<div>
			<Cards cardData={cardData}/>
			<Results cardData={cardData}/>
			{cardData.remaining == 0 ? <StartGame /> : <DrawCard deckId={deckId} cardData={cardData} setCardData={setCardData}/>}
	 	</div>
	 )

}