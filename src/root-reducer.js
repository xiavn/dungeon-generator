import { combineReducers } from "redux";
import { constants as controls, reducer as controlsReducer } from "controls";

const rootReducer = combineReducers({
	[controls.NAME]: controlsReducer,
});

export default rootReducer;
