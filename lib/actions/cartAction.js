import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY } from "../action-types/cart-actions";

//* add cart action
export const addToCart = (itemCode, qty, price, name, size, variant) => {
	return {
		type: ADD_TO_CART,
		payload: { itemCode, qty, price, name, size, variant },
	};
};
//* remove item action
export const removeItem = (id) => {
	return {
		type: REMOVE_ITEM,
		id,
	};
};
//* subtract qt action
export const subtractQuantity = (id) => {
	return {
		type: SUB_QUANTITY,
		id,
	};
};
//* add qt action
export const addQuantity = (id) => {
	return {
		type: ADD_QUANTITY,
		id,
	};
};
