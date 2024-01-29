import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SAVE_CART, SUB_QUANTITY, UPDATE_CART } from "../action-types/cart-actions";

//* add cart action
export const addToCart = (itemCode, qty, price, name, size, variant) => {
	return {
		type: ADD_TO_CART,
		payload: { itemCode, qty, price, name, size, variant },
	};
};
//* remove item action
export const removeItem = (itemCode) => {
	return {
		type: REMOVE_ITEM,
		itemCode,
	};
};
//* subtract qt action
export const subtractQuantity = (itemCode) => {
	return {
		type: SUB_QUANTITY,
		itemCode,
	};
};
//* add qt action
export const addQuantity = (itemCode) => {
	return {
		type: ADD_QUANTITY,
		itemCode,
	};
};
//* update cart action
export const updateCart = (cart) => {
	return {
		type: UPDATE_CART,
		cart,
	};
};
export const saveCart = () => {
	return {
		type: SAVE_CART,
	};
};
