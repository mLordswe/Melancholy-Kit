import React, { useState } from "react";
import Button from "../Button/Button";

export const Counter = () => {
	const [value, setValue] = useState(0);
	return (
		<div>
			<h1>{value}</h1>
			<Button title="-1" handleClick={() => setValue(value - 1)} />
			<Button title="+1" handleClick={() => setValue(value + 1)} />
		</div>
	);
};
