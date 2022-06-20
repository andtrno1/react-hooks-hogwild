import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs"
import FilterHogs from "./FilterHogs";

function App() {
	const [hogsArr, setHogs] = useState(hogs);
	return (
		<div className="App">
			<Nav />
			<FilterHogs hogs={hogsArr} setHogs={setHogs} />
			< Hogs hogs={hogsArr} />
			

		</div>
	);
}

export default App;