import { useState } from "react";
import { useAnime } from "../contexts/AnimeContext";
import { useNavigate } from "react-router-dom";

function AnimeForm() {
	const [anime, setAnime] = useState("");
	const [progress, setProgress] = useState("Watching");
	const { addAnime } = useAnime();
	const navigate = useNavigate();

	const add = (e) => {
		e.preventDefault();

		if (!anime) return;

		addAnime({ anime: anime, progress: progress });
		setAnime("");
		setProgress("Watching");
		navigate("/");
	};

	return (
		<>
			<h2 className="text-2xl font-bold py-6">Add New Anime</h2>
			<hr className="border-t border-gray-300 mb-4" />
			<form onSubmit={add}>
				<label htmlFor="anime-name" className="font-medium mb-2 block">
					Anime Name
				</label>
				<input id="anime-name" className="w-full text-sm p-2 mb-4" type="text" placeholder="Add New Anime" value={anime} onChange={(e) => setAnime(e.target.value)}
				/>
				<label htmlFor="status" className="font-medium mb-2 block">
					Status
				</label>
				<select id="status" className="w-full text-sm p-2 mb-4" value={progress} onChange={(e) => setProgress(e.target.value)}
				>
					<option value="Watching">Watching</option>
					<option value="Completed">Completed</option>
					<option value="Planning to Watch">Planning to Watch</option>
					<option value="Dropped">Dropped</option>
				</select>
				<button className="bg-gray-950 text-white px-3 py-2 text-sm" type="submit">
					Submit
				</button>
			</form>
		</>
	);
}

export default AnimeForm;
