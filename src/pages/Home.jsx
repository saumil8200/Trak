import { useAnime } from "../contexts/AnimeContext";
import AnimeItem from "../components/AnimeItem";
import { Link } from "react-router-dom";

function Home() {
  const { animes } = useAnime();

  const groupedAnimes = {
    Watching: [],
    Completed: [],
    "Planning to Watch": [],
    Dropped: []
  };

  animes.forEach((anime) => {
    groupedAnimes[anime.progress].push(anime);
  });

  return (
    <>
		<h1 className="py-6 uppercase text-4xl font-black">Trak</h1>
		<hr className="border-t border-gray-300 mb-4" />
		<Link to="/addanime">
			<button className="bg-gray-950 text-white px-3 py-2 mb-6 text-sm">Add Anime</button>
		</Link>

		{/* Watching Section */}
		{groupedAnimes.Watching.length > 0 && (
			<section>
			<h2 className="text-xl font-semibold text-gray-800">Watching</h2>
			<div>
				{groupedAnimes.Watching.map((anime) => (
				<AnimeItem key={anime.id} anime={anime} />
				))}
			</div>
			</section>
		)}

		{/* Completed Section */}
		{groupedAnimes.Completed.length > 0 && (
			<section>
			<h2 className="text-xl font-semibold text-gray-800">Completed</h2>
			<div>
				{groupedAnimes.Completed.map((anime) => (
				<AnimeItem key={anime.id} anime={anime} />
				))}
			</div>
			</section>
		)}

		{/* Planning to Watch Section */}
		{groupedAnimes["Planning to Watch"].length > 0 && (
			<section>
			<h2 className="text-xl font-semibold text-gray-800">Planning to Watch</h2>
			<div>
				{groupedAnimes["Planning to Watch"].map((anime) => (
				<AnimeItem key={anime.id} anime={anime} />
				))}
			</div>
			</section>
		)}

		{/* Dropped Section */}
		{groupedAnimes.Dropped.length > 0 && (
			<section>
			<h2 className="text-xl font-semibold text-gray-800">Dropped</h2>
			<div>
				{groupedAnimes.Dropped.map((anime) => (
				<AnimeItem key={anime.id} anime={anime} />
				))}
			</div>
			</section>
		)}
    </>
  );
}

export default Home;
