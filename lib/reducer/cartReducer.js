import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SAVE_CART, SUB_QUANTITY, UPDATE_CART } from "../action-types/cart-actions";

const initialState = {
	cart: [],
	subTotal: 0,
};

const calculateSubTotal = (newCart) => {
	return newCart.reduce((total, item) => total + item.price * item.qty, 0);
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const { slug, qty, price, title, size, color, img, colorCode } = action.payload;
			const newCart = [...state.cart];
			const existingItemIndex = newCart.findIndex((item) => item.slug === slug);

			if (existingItemIndex !== -1) {
				newCart[existingItemIndex] = {
					...newCart[existingItemIndex],
					qty: newCart[existingItemIndex].qty + qty,
				};
			} else {
				newCart.push({ slug, qty, price, title, size, color, img, colorCode });
			}

			const newTotal = calculateSubTotal(newCart);
			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
			};
		}
		case REMOVE_ITEM: {
			const { slug } = action;
			const newCart = [...state.cart];
			const itemIndex = newCart.findIndex((item) => item.slug === slug);

			if (itemIndex !== -1) {
				newCart.splice(itemIndex, 1);
			}

			const newTotal = calculateSubTotal(newCart);
			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
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
			}

			const newTotal = calculateSubTotal(newCart);
			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
			};
		}
		case SUB_QUANTITY: {
			const { slug } = action;
			const newCart = [...state.cart];
			const itemIndex = newCart.findIndex((item) => item.slug === slug);

			if (itemIndex !== -1) {
				if (newCart[itemIndex].qty > 1)
					newCart[itemIndex] = {
						...newCart[itemIndex],
						qty: newCart[itemIndex].qty - 1,
					};
			}

			const newTotal = calculateSubTotal(newCart);
			return {
				...state,
				cart: newCart,
				subTotal: newTotal,
			};
		}
		case UPDATE_CART: {
			const { cart } = action;
			const newTotal = calculateSubTotal(cart);
			return {
				cart: cart,
				subTotal: newTotal,
			};
		}
		case SAVE_CART: {
			const cartData = JSON.stringify(state.cart);
			localStorage.setItem("cart", cartData);
			return state;
		}
		default:
			return state;
	}
};

export default cartReducer;