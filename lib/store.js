import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";
import userReducer from "./reducer/userReducer";

export const Store = () => {
	return configureStore({
		reducer: {
			cart: cartReducer,
			user: userReducer,
		},
	});
};
