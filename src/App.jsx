import './App.css'
import { useEffect, useState } from "react";
import { AnimeProvider } from './contexts/AnimeContext';
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  const [animes, setAnimes] = useState([]);

  const addAnime = (anime) => {
		setAnimes((prev) => [{ id: Date.now(), ...anime }, ...prev]);
	};

	const updateAnime = (id, anime) => {
		setAnimes((prev) => prev.map((prevAnime) => (prevAnime.id === id ? anime : prevAnime)));
	};

	const deleteAnime = (id) => {
		setAnimes((prev) => prev.filter((anime) => anime.id !== id));
	};

  useEffect(() => {
		const animes = JSON.parse(localStorage.getItem("animes"));

		if (animes && animes.length > 0) {
			setAnimes(animes);
		}
	}, []);

  useEffect(() => {
		localStorage.setItem("animes", JSON.stringify(animes));
	}, [animes]);

  return (
    <>
      <AnimeProvider value={{ animes, addAnime, updateAnime, deleteAnime }}>
        <RouterProvider router={router} />
      </AnimeProvider>
    </>
  )
}

export default App
