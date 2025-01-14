import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* <div className="bg-white">
				<Header />
			</div> */}

			<div className="flex-grow w-[80%] md:w-[80%] mx-auto">
				<Outlet />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
