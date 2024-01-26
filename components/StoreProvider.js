import { Store } from "@/lib/store";
import React from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
	const store = Store();

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
