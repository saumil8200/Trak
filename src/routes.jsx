import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AnimeForm from "./components/AnimeForm";

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="addanime" element={<AnimeForm />} />
		</Route>
	)
);

export default router;
