/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const AnimeContext = createContext({
	animes: [
		{
			id: 1,
			anime: "Attack on Titan",
			progress: "Watching"
		}
	],
	addAnime: () => {},
	updateAnime: (id, anime) => {},
	deleteAnime: (id) => {}
});

export const useAnime = () => {
	return useContext(AnimeContext);
};

export const AnimeProvider = AnimeContext.Provider;
