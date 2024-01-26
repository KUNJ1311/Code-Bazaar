import { ADD_TO_CART } from "../action-types/cart-actions";

const initialState = {
	cart: {},
	subTotal: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const { itemCode, qty, price, name, size, variant } = action.payload;
			const newCart = { ...state.cart };
			if (itemCode in newCart) {
				newCart[itemCode] = {
					...newCart[itemCode],
					qty: newCart[itemCode].qty + qty,
				};
			} else {
				newCart[itemCode] = { itemCode, qty: 1, price, name, size, variant };
			}

			const newSubTotal = state.subTotal + price * qty;

			return {
				...state,
				cart: newCart,
				subTotal: newSubTotal,
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
