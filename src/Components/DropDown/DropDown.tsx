import React, { useState } from "react";

type DropDownProps = {
	items: string[] | number[];
	label: string;
};
const DropDown = ({ items, label }: DropDownProps) => {
	const [value, setValue] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<h2>DropDown</h2>
			<label htmlFor="DropDown">{label}</label>
			<select name="DropDown" id="DropDown" onChange={handleChange}>
				{items.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<p>Selected: {value}</p>
		</>
	);
};

export default DropDown;
