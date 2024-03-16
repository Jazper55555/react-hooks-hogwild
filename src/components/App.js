import React from "react";
import Nav from "./Nav";
import Tiles from './Tiles'
import hogs from "../porkers_data";

function App() {
	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<Tiles hogs={hogs}/>
		</div>
	);
}

export default App;

// 1. Break UI into reusable components heirarchy
// 2. Build a static version of App
// 3. Add state (minimal but complete representation)
// 4. Identify which components state should live in
// 5. Add inverse data flow (for value changes - use callback functions for parent components)

// App
	// Nav
	// Tiles
		// Click Tiles
		// Filter
		// Sort
		// Hide 
	// Add New Hogs
