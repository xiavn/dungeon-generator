import { actionTypes as T } from "./constants";

const initialState = {
	width: 20,
	height: 20,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case T.CHANGE_SETTING:
			return { ...state, [action.type]: action.value };
		default:
			return state;
	}
};

export default reducer;
