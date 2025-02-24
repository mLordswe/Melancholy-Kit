import React from "react";
type DropDownProps = {
	items: string[] | number[];
};
const DropDown = ({ items }: DropDownProps) => {
	return (
		<>
			<h2>DropDown</h2>

			<select>
				{items.map((item, index) => (
					<option key={index}>{item}</option>
				))}
			</select>
		</>
	);
};

export default DropDown;
