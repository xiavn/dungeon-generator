import React from "react";
import { number, string, func } from "prop-types";

const NumberInput = ({ onChange, name, value }) => (
	<input type="number" value={value} onChange={onChange} name={name} />
);

NumberInput.propTypes = {
	onChange: func.isRequired,
	name: string.isRequired,
	value: number.isRequired,
};

export default NumberInput;
