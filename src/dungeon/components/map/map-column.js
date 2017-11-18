import React from "react";
import { arrayOf, object } from "prop-types";
import Cell from "./cell";

const Column = ({ cells }) => {
	return (
		<div className="column">
			{cells.map((cell, i) => <Cell key={i} type="rock" />)}
		</div>
	);
};

Column.propTypes = {
	cells: arrayOf(object).isRequired,
};

export default Column;
