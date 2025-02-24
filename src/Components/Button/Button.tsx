import React, { useState } from "react";

type ButtonProps = {
	title: string;
	handleClick: () => void;
};
const Button = ({ title, handleClick }: ButtonProps) => {
	return (
		<>
			<button onClick={handleClick}>{title}</button>
		</>
	);
};

export default Button;
