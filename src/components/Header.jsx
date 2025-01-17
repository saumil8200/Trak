/* eslint-disable react/prop-types */
function Header({ exportAnimes, importAnimes }) {
	return (
	  <header className="py-4">
		<div className="w-[80%] md:w-[60%] mx-auto">
		  <div className="flex space-x-4">
			<button 
			  onClick={exportAnimes} 
			  className="bg-gray-950 text-white text-sm px-3 py-2"
			>
			  Export Animes
			</button>
  
			<label 
			  htmlFor="import-file"
			  className="bg-gray-950 text-white text-sm px-3 py-2 cursor-pointer"
			>
			  Import Animes
			</label>
			<input
			  id="import-file"
			  type="file"
			  onChange={importAnimes}
			  className="hidden"
			/>
		  </div>
		</div>
	  </header>
	);
  }
  
  export default Header;
  