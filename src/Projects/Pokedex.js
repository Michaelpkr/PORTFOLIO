import { useState } from 'react';

export default function Pokedex(){

	const [pokemonData, setsPokemonData] = useState({
														name: "",
														type: "",
														weight: "",
														url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbZjWMgKBy2PUf1AZKJRvPeNEc76NuiB5Qw&usqp=CAU",
														height: ""
													})

	const [inputData, setsInputData] = useState("")

	const handleChange = (e) => {setsInputData(e.target.value.toLowerCase());}

	const getsRandomPokemon = () => {
		let pokemonId = Math.floor(Math.random() * 898)

		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then(res => res.json())
			.then(data => {
				setsPokemonData(
					{name: (data.species.name).toUpperCase(),
					type: data.types[0].type.name.toUpperCase() + " POKEMON",
					weight: "WEIGHT: " + data.weight,
					url: data.sprites.front_default,
					height: "HEIGHT: " + data.height}
				)
			})
			.catch(err => {
				console.log(`error ${err}`)
			});
	}

	const getsPokemon = () => {
		let pokemon = inputData

		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
			.then(res => res.json())
			.then(data => {
				setsPokemonData(
					{name: data.species.name.toUpperCase(),
					type: data.types[0].type.name.toUpperCase() + " POKEMON",
					weight: "WEIGHT: " + data.weight,
					url: data.sprites.front_default,
					height: "HEIGHT: " + data.height}
				)
			})
			.catch(err => {
				console.log(`error ${err}`)
			});

	}

	return(
		<div id="pokedex">
			<h1 id="pokedexLogo">POKEDEX</h1>
			<img id="pokemonScreen" alt={pokemonData.name} src={pokemonData.url}></img>
			<h2 id="pokemonname">{pokemonData.name}</h2>
            <h2 id="pokemontype">{pokemonData.type}</h2>
            <h2 id="pokemonheight">{pokemonData.height}</h2>
            <h2 id="pokemonweight">{pokemonData.weight}</h2>
			<input id="pokemoninput" placeholder="Enter Pokemon Name or ID" onChange={handleChange} type="text"></input>
			<div>
			<button id="getPokemon" onClick={getsPokemon}>Get Pokemon</button>
			<button id="getRandomPokemon" onClick={getsRandomPokemon}>Get Random Pokemon</button>
			</div>
		</div>
	)
}



















