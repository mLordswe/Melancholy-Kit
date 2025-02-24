import { useState } from "react";

import "./App.scss";
import ListSection from "./Components/ListSection/ListSection";
import DropDown from "./Components/DropDown/DropDown";
import Button from "./Components/Button/Button";
import { Counter } from "./Components/Counter/Counter";

function App() {
	const animalsArray = ["dog", "cat", "bird"];
	const persons = ["John", "Doe", "Jane"];
	const numbers = [1, 2, 3, 4, 5];
	return (
		<>
			<header>
				<h1>Melancholy Kit 😞 </h1>
			</header>
			<p>A sad Component library</p>
			<ListSection title="Array of Animals" items={animalsArray} />
			<DropDown items={persons} label="Names: " />
			<Button title="Click me" handleClick={() => alert("I am sad")} />
			<Counter />
		</>
	);
}

export default App;
