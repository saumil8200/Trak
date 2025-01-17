import { useState } from "react";
import { useAnime } from "../contexts/AnimeContext";
import AnimeItem from "../components/AnimeItem";
import { Link } from "react-router-dom";

function Home() {
  const { animes } = useAnime();
  const [collapsedSections, setCollapsedSections] = useState({
    Watching: false,
    Completed: false,
    "Planning to Watch": false,
    Dropped: false,
  });

  const toggleCollapse = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
        <button className="bg-gray-950 text-white px-3 py-2 mb-6 text-sm">
          Add Anime
        </button>
      </Link>

      {/* Watching Section */}
      {groupedAnimes.Watching.length > 0 && (
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("Watching")}
          >
            <h2 className="text-xl font-semibold text-gray-800">Watching</h2>
            <span className="text-sm text-gray-600">
              {collapsedSections.Watching ? "Show" : "Hide"}
            </span>
          </div>
          {!collapsedSections.Watching && (
            <div className="space-y-4 mt-4">
              {groupedAnimes.Watching.map((anime) => (
                <AnimeItem key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Completed Section */}
      {groupedAnimes.Completed.length > 0 && (
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("Completed")}
          >
            <h2 className="text-xl font-semibold text-gray-800">Completed</h2>
            <span className="text-sm text-gray-600">
              {collapsedSections.Completed ? "Show" : "Hide"}
            </span>
          </div>
          {!collapsedSections.Completed && (
            <div className="space-y-4 mt-4">
              {groupedAnimes.Completed.map((anime) => (
                <AnimeItem key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Planning to Watch Section */}
      {groupedAnimes["Planning to Watch"].length > 0 && (
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("Planning to Watch")}
          >
            <h2 className="text-xl font-semibold text-gray-800">Planning to Watch</h2>
            <span className="text-sm text-gray-600">
              {collapsedSections["Planning to Watch"] ? "Show" : "Hide"}
            </span>
          </div>
          {!collapsedSections["Planning to Watch"] && (
            <div className="space-y-4 mt-4">
              {groupedAnimes["Planning to Watch"].map((anime) => (
                <AnimeItem key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Dropped Section */}
      {groupedAnimes.Dropped.length > 0 && (
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("Dropped")}
          >
            <h2 className="text-xl font-semibold text-gray-800">Dropped</h2>
            <span className="text-sm text-gray-600">
              {collapsedSections.Dropped ? "Show" : "Hide"}
            </span>
          </div>
          {!collapsedSections.Dropped && (
            <div className="space-y-4 mt-4">
              {groupedAnimes.Dropped.map((anime) => (
                <AnimeItem key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default Home;
