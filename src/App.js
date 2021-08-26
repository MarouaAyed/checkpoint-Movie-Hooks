import "./App.css";
import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
	/* state */
	const [movies, setMovies] = useState([
		{
			title: "Lara Croft: Tomb Raider",
			duration: "100 min",
			date: "2001",
			posterURL: "https://www.youtube.com/watch?v=B5DMBPvLSJA",
			rating: 5,
			genre: "Action",
			description: "Video game",
			img: "LaraCroftTombRaider.jpg",
		},
		{
			title: "Avengers",
			duration: "140 min",
			date: "2012",
			posterURL: "https://www.youtube.com/watch?v=ew1c4FizEAo",
			rating: 4,
			genre: "Sci-Fi",
			description: "Video game",
			img: "Avengers.jpg",
		},
		{
			title: "21 Jump Street",
			duration: "109 min",
			date: "2012",
			posterURL: "https://www.youtube.com/watch?v=826VLoO9Ioc",
			rating: 3,
			genre: "Comedy",
			description: "Video game",
			img: "21JumpStreet.jpg",
		},
	]);
	const [keyword, setkeyword] = useState("");
	const search = (text) => {
		setkeyword(text);
	};
	/* pour le search selon les etoils */
	const [newRate, setnewRate] = useState(1);
	const setRate = (rate) => {
		setnewRate(rate);
	};
	const addMovie = (movie) => {
		setMovies(movies.concat(movie));
	};
	return (
		<div className="App">
			<Filter search={search} setRate={setRate} newRate={newRate} />
			<MovieList
				movies={movies.filter(
					(movie) =>
						movie.title.toLowerCase().includes(keyword.toLowerCase().trim()) &&
						movie.rating >= newRate
				)}
				addMovie={addMovie}
			/>
			{/* toLowerCase() => pour quelques soit miniscule ou majuscule 
			 trim() => pour l'espace */}
		</div>
	);
}

export default App;
