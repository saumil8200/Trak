/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";

function AnimeItem({ anime }) {
  const { deleteAnime } = useAnime();

  const handleDelete = () => {
    deleteAnime(anime.id);
  };

  const handleEdit = () => {
    console.log('Edit anime:', anime.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white mb-2">
      <div>
        <Link to={`/anime/${anime.id}`} className="text-xl font-bold">
          {anime.anime}
        </Link>
        <p className="text-gray-500">{anime.progress}</p>
      </div>

      <div className="flex space-x-2">
        <button onClick={handleEdit} className="bg-gray-950 text-white px-4 py-1 text-sm">
          Edit
        </button>

        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-1 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}

export default AnimeItem;
