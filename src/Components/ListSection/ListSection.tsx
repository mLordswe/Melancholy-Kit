import { useState } from "react";

type ListSectionProps = {
	items: string[] | number[];
	title: string;
};
const ListSection = ({ items, title }: Readonly<ListSectionProps>) => {
	const [things, setThings] = useState(items);

	return (
		<>
			<h2>{title}</h2>

			<ul>
				{things.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default ListSection;
