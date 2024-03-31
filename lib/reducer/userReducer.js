import { ADD_USER_DATA, LOGOUT_USER } from "../action-types/user-actions";

const initialState = { token: null, key: 0 };

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_DATA:
			return action.payload;
		case LOGOUT_USER:
			localStorage.removeItem("token");
			return { ...state, token: null, key: Math.random() };
		default:
			return state;
	}
};

export default userReducer;
