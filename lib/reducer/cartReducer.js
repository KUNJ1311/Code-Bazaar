import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SAVE_CART, SUB_QUANTITY, UPDATE_CART } from "../action-types/cart-actions";

const initialState = {
	cart: [],
	subTotal: 0,
	totalQty: 0,
};

const calculateSubTotal = (newCart) => {
	return newCart.reduce((total, item) => total + item.price * item.qty, 0);
};

const calculateTotalQty = (newCart) => {
	return newCart.reduce((total, item) => total + item.qty, 0);
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const { slug, qty, price, title, size, color, Image, availableQty } = action.payload;
			const newCart = [...state.cart];
			const existingItemIndex = newCart.findIndex((item) => item.slug === slug);

			if (existingItemIndex !== -1) {
				newCart[existingItemIndex] = {
					...newCart[existingItemIndex],
					qty: newCart[existingItemIndex].qty + qty,
				};
			} else {
				newCart.push({ slug, qty, price, title, size, color, Image, availableQty });
			}

			const newTotalQty = state.totalQty + qty;
			const newTotal = state.subTotal + price * qty;

			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
				totalQty: newTotalQty,
			};
		}
		case REMOVE_ITEM: {
			const { slug } = action;
			const newCart = [...state.cart];
			const itemIndex = newCart.findIndex((item) => item.slug === slug);

			if (itemIndex !== -1) {
				newCart.splice(itemIndex, 1);
			}

			const newTotalQty = calculateTotalQty(newCart);
			const newTotal = calculateSubTotal(newCart);
			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
				totalQty: newTotalQty,
			};
		}
		case ADD_QUANTITY: {
			const { slug } = action;
			const newCart = [...state.cart];
			const itemIndex = newCart.findIndex((item) => item.slug === slug);

			if (itemIndex !== -1) {
				newCart[itemIndex] = {
					...newCart[itemIndex],
					qty: newCart[itemIndex].qty + 1,
				};

				const newTotalQty = state.totalQty + 1;
				const newTotal = state.subTotal + newCart[itemIndex].price;

				return {
					...state,
					cart: newCart,
					subTotal: newTotal,
					totalQty: newTotalQty,
				};
			}

			return state;
		}
		case SUB_QUANTITY: {
			const { slug } = action;
			const newCart = [...state.cart];
			const itemIndex = newCart.findIndex((item) => item.slug === slug);

			if (itemIndex !== -1 && newCart[itemIndex].qty > 1) {
				newCart[itemIndex] = {
					...newCart[itemIndex],
					qty: newCart[itemIndex].qty - 1,
				};

				const newTotalQty = state.totalQty - 1;
				const newTotal = state.subTotal - newCart[itemIndex].price;

				return {
					...state,
					cart: newCart,
					subTotal: newTotal,
					totalQty: newTotalQty,
				};
			}

			return state;
		}
		case UPDATE_CART: {
			const { cart } = action;
			const newTotalQty = calculateTotalQty(cart);
			const newTotal = calculateSubTotal(cart);
			return {
				cart: cart,
				subTotal: newTotal,
				totalQty: newTotalQty,
			};
		}
		case SAVE_CART: {
			const cartData = JSON.stringify(state.cart);
			localStorage.setItem("cart", cartData);
			return state;
		}
		default: {
			return state;
		}
	}
};

export default cartReducer;
