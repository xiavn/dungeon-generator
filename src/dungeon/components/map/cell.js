import React from "react";

const Cell = ({ type }) => {
	return (
		<div className={`cell${type ? ` ${type}` : ""}`}>
			<div />
		</div>
	);
};

export default Cell;
