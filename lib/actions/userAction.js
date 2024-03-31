import { ADD_USER_DATA, LOGOUT_USER } from "../action-types/user-actions";

export const addUserData = (userData) => ({
	type: ADD_USER_DATA,
	payload: userData,
});

export const logoutUser = () => ({
	type: LOGOUT_USER,
});
