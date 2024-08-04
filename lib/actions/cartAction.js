import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SAVE_CART, SUB_QUANTITY, UPDATE_CART } from "../action-types/cart-actions";

//* add cart action
export const addToCart = (slug, qty, price, title, size, color, Image, availableQty) => {
	return {
		type: ADD_TO_CART,
		payload: { slug, qty, price, title, size, color, Image, availableQty },
	};
};
//* remove item action
export const removeItem = (slug) => {
	return {
		type: REMOVE_ITEM,
		slug,
	};
};
//* subtract qt action
export const subtractQuantity = (slug) => {
	return {
		type: SUB_QUANTITY,
		slug,
	};
};
//* add qt action
export const addQuantity = (slug) => {
	return {
		type: ADD_QUANTITY,
		slug,
	};
};
//* update cart action
export const updateCart = (cart) => {
	return {
		type: UPDATE_CART,
		cart,
	};
};
//* save cart action
export const saveCart = () => {
	return {
		type: SAVE_CART,
	};
};
