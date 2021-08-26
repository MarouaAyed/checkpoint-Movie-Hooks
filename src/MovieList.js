//rafce

import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				{movies.map((el, i) => (
					<MovieCard movie={el} key={i} />
				))}
			</div>
			<div>
				<i class="far fa-plus-square" onClick={handleShow}></i>
				<AddMovie handleClose={handleClose} show={show} addMovie={addMovie} />
			</div>
		</div>
	);
};

export default MovieList;
