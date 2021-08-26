import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import StarRatingComponent from "react-star-rating-component";

const AddMovie = ({ handleClose, show, addMovie }) => {
	const [newMovie, setnewMovie] = useState({
		title: "",
		duration: 0,
		date: "",
		posterURL: "",
		rating: 1,
		genre: "",
		description: "",
		img: "",
	});
	const handleChange = (e) => {
		setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
	};
	const onStartClick = (nextValue, preValue, name) => {
		setnewMovie({ ...newMovie, rating: nextValue });
	};

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Put a movie title"
								name="title"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Poster URL</Form.Label>
							<Form.Control
								type="text"
								placeholder=" Put a movie poster URL"
								name="posterURL"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Duration</Form.Label>
							<Form.Control
								type="text"
								placeholder="Put a movie duration"
								name="duration"
								onChange={handleChange}
							/>
						</Form.Group>
            
						<Form.Group>
							<Form.Label>Date</Form.Label>
							<Form.Control
								type="date"
								placeholder="Put a movie date"
								name="date"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Rating</Form.Label>
							<StarRatingComponent
								name="rate1"
								starCount={5}
								value={newMovie.rating}
								onStarClick={onStartClick}
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Image</Form.Label>
							<Form.Control type="file" name="img" onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Select a movie genre</Form.Label>
							<Form.Control as="select" name="genre" onChange={handleChange}>
								<option>Action</option>
								<option>Comedy</option>
								<option>Sci-Fi</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="description"
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							addMovie(newMovie);
							handleClose();
						}}
					>
						Add Movie
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default AddMovie;
