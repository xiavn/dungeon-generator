import React from "react";
import { oneOf } from "prop-types";

const Cell = ({ type }) => {
	return (
		<div className={`cell${type ? ` ${type}` : ""}`}>
			<div />
		</div>
	);
};

Cell.propTypes = {
	type: oneOf(["rock"]).isRequired,
};

export default Cell;
