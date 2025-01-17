/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";
import { useState } from "react";

function AnimeItem({ anime }) {
  const { updateAnime, deleteAnime } = useAnime();

  const [animeName, setAnimeName] = useState(anime.anime);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateAnime = () => {
    updateAnime(anime.id, { ...anime, anime: animeName });
    setIsEditing(false);
	};

  const handleDelete = () => {
    deleteAnime(anime.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white mb-2">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            className="text-xl bg-gray-100 px-4 py-1 w-full"
          />
        ) : (
          // <Link to={`/anime/${anime.id}`} className="text-xl font-bold">
          //   {anime.anime}
          // </Link>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(anime.anime)} anime`}
            className="text-xl font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {anime.anime}
          </a>
        )}
        {/* <p className="text-gray-500">{anime.progress}</p> */}
      </div>

      <div>
        {isEditing ? (
          <button onClick={handleUpdateAnime} className="text-gray-950 font-semibold bg-white px-4 py-1 text-sm">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-gray-950 font-semibold bg-white px-4 py-1 text-sm">
            Edit
          </button>
        )}

        <button onClick={handleDelete} className="text-red-600 font-semibold bg-white px-4 py-1 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}

export default AnimeItem;
