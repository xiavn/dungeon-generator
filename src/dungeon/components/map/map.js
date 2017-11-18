import React from "react";
import { arrayOf, array } from "prop-types";
import Column from "./map-column";
import "./styles/map.css";

const Map = ({ map }) => {
	return (
		<div className="map">
			{map.map((column, i) => <Column cells={column} key={i} />)}
		</div>
	);
};

Map.propTypes = {
	map: arrayOf(array).isRequired,
};

export default Map;
