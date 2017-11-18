import React from "react";
import Column from "./map-column";
import "./styles/map.css";

const Map = ({ map }) => {
	return (
		<div className="map">
			{map.map((column, i) => <Column cells={column} key={i} />)}
		</div>
	);
};

export default Map;
