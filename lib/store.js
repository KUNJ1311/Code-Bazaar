import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";

export const Store = () => {
	return configureStore({
		reducer: {
			cart: cartReducer,
		},
	});
};
