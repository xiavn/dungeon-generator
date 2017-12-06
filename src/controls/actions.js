import { actionTypes as T } from "./constants";

export const changeSetting = (type, value) => ({
	type: T.SETTING_UPDATE,
	payload: {
		type,
		value,
	},
});
