import React from "react";
import { truncateText } from "../truncateText";
import { addQuantity, addToCart, removeItem, saveCart, subtractQuantity, updateCart } from "@/lib/actions/cartAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const CartList = () => {
	const dispatch = useAppDispatch();
	const { cart, subTotal } = useAppSelector((state) => state.cart);

	const handleIncrement = (slug) => {
		dispatch(addQuantity(slug));
		dispatch(saveCart());
	};

	const handleDecrement = (slug) => {
		dispatch(subtractQuantity(slug));
		dispatch(saveCart());
	};

	const handleRemove = (slug) => {
		dispatch(removeItem(slug));
		dispatch(saveCart());
	};
	return (
		<div className="mt-8">
			<div className="flow-root">
				<ul role="list" className="-my-6 divide-y divide-gray-200">
					{cart?.map((product) => (
						<li key={product.slug} className="flex py-6">
							<div className="h-[85px] w-[85px] cart-img-small sm:h-24 sm:w-24 md:h-30 md:w-30 lg:w-32 lg:h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
								<img src={product.img} alt={product.title} className="h-full w-full object-cover object-center" />
							</div>

							<div className="ml-4 flex flex-1 flex-col">
								<div>
									<div className="flex justify-between text-xs sm:text-sm md:text-base font-medium text-gray-900">
										<h3>
											<a href={`/product/${product.title}`} className="hover:text-primary multi-line-ellipsis">
												{truncateText(product.title, 60)}
											</a>
										</h3>
										<p className="ml-4">₹{product.price}</p>
									</div>
									<p className="mt-1 text-xs font-normal md:text-sm text-gray-400">
										{product.color} - {product.size}
									</p>
								</div>
								<div className="flex flex-1 items-end justify-between text-xs md:text-sm mt-2">
									<form className="max-w-xs mr-auto">
										<label htmlFor="quantity-input" className="block mb-1 text-xs md:text-sm font-medium text-gray-600">
											Quantity:
										</label>
										<div className="relative flex items-center max-w-[7rem]">
											<button type="button" id="decrement-button" onClick={() => handleDecrement(product.slug)} className={`flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-7 ${product.qty === 1 ? "cursor-not-allowed" : ""}`} disabled={product.qty === 1}>
												<svg className="w-2 h-2 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
												</svg>
											</button>
											<input id="quantity-input" value={product.qty} className="bg-gray-50 border border-x-0 border-gray-300 h-7 text-center text-gray-900 text-sm block w-full py-2.5 focus:outline-none cursor-default" readOnly />
											<button type="button" id="increment-button" onClick={() => handleIncrement(product.slug)} className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-7">
												<svg className="w-2 h-2 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
												</svg>
											</button>
										</div>
									</form>
									<div className="flex">
										<button
											type="button"
											className="text-xs md:text-sm font-medium text-primary hover:text-red-500"
											onClick={() => {
												handleRemove(product.slug);
											}}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CartList;
