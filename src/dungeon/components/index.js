import React from "react";
import Map from "./map/map";

const Dungeon = () => {
	const map = [];
	for (let i = 0; i < 20; i++) {
		const column = [];
		for (let p = 0; p < 20; p++) {
			column.push({});
		}
		map.push(column);
	}
	return (
		<div>
			<Map map={map} />
		</div>
	);
};

export default Dungeon;
