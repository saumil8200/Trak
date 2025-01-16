import './App.css'
import { useEffect, useState } from "react";
import Header from './components/Header';
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

	const exportAnimes = () => {
		const blob = new Blob([JSON.stringify(animes)], { type: 'application/json' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'animes.json';
		link.click();
	};

	const importAnimes = (event) => {
		const file = event.target.files[0];
		if (file) {
		  const reader = new FileReader();
		  reader.onload = () => {
			try {
			  const data = JSON.parse(reader.result);
			  if (Array.isArray(data)) {
				setAnimes(data);
			  } else {
				alert('Invalid file format.');
			  }
			// eslint-disable-next-line no-unused-vars
			} catch (error) {
			  alert('Error reading file.');
			}
		  };
		  reader.readAsText(file);
		}
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
	  	<Header exportAnimes={exportAnimes} importAnimes={importAnimes} />
        <RouterProvider router={router} />
      </AnimeProvider>
    </>
  )
}

export default App
