import React from "react";
import Cell from "./cell";

const Column = ({ cells }) => {
	return (
		<div className="column">
			{cells.map((cell, i) => <Cell key={i} type="rock" />)}
		</div>
	);
};

export default Column;
