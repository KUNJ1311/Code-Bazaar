import { addQuantity, addToCart, removeItem, saveCart, subtractQuantity, updateCart } from "@/lib/actions/cartAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Cart = () => {
	const ref = useRef();
	const dispatch = useAppDispatch();
	const { cart, subTotal } = useAppSelector((state) => state.cart);

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	const handleIncrement = (itemCode) => {
		dispatch(addQuantity(itemCode));
		dispatch(saveCart());
	};

	const handleDecrement = (itemCode) => {
		dispatch(subtractQuantity(itemCode));
		dispatch(saveCart());
	};

	const handleRemove = (itemCode) => {
		dispatch(removeItem(itemCode));
		dispatch(saveCart());
	};

	return (
		<>
			<div type="button" onClick={toggleCart} className="flex">
				<ul className="flex text-lg items-center pr-5 md:text-xl">
					<li className={`flex cursor-pointer hover:text-primary nav-under relative transition-my space-x-2 items-center justify-center `}>
						<BsCart3 className="relative text-2xl" />
						<span className="cart_hide">Cart</span>
					</li>
				</ul>
			</div>
			<div className="relative sm:top-[69px] top-[56px] right-0 z-0 sm:pt-[-69px] pt-[-56px]">
				<div ref={ref} className="transition translate-x-full pointer-events-none fixed right-0 flex sm:max-h-[calc(100%-69px)] max-h-[calc(100%-56px)] max-w-full ">
					<div className="pointer-events-auto w-screen max-w-md ">
						<div className="flex h-full flex-col ">
							<div className="flex-1 md:rounded-bl-2xl px-4 py-6 sm:px-6 md:pl-6 lg:pl-10 border-gray-300 border-b-2 border-l-2 bg-white overflow-y-auto overflow-x-hidden scroller">
								<div className="flex items-start justify-between">
									<div className="text-lg font-medium text-gray-900">Shopping cart</div>
									<div className="ml-3 flex h-7 items-center">
										<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={toggleCart}>
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Close panel</span>
											<IoClose className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
								</div>
								{cart.length == 0 ? (
									<>
										<div className="flex flex-col justify-center">
											<div className="pt-7 pb-5 flex justify-center">
												<img src="/cart.svg" className="w-44 h-44" alt="Empty Cart" />
											</div>
											<span className="text-center text-2xl text-red-800 font-bold font-spartan">OOPS!</span>
											<span className="text-center text-xl text-black font-bold font-spartan mt-1">Your Cart Is Empty...</span>
										</div>
										<div className="pt-5 flex justify-center text-center text-xs md:text-sm text-gray-500">
											<p>
												<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500" onClick={toggleCart}>
													Continue Shopping
													<span aria-hidden="true"> &rarr;</span>
												</button>
											</p>
										</div>
									</>
								) : (
									<>
										<div className="mt-8">
											<div className="flow-root">
												<ul role="list" className="-my-6 divide-y divide-gray-200">
													{cart?.map((product) => (
														<li key={product.itemCode} className="flex py-6">
															<div className="h-16 w-16 md:h-24 md:w-24 lg:w-32 lg:h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																<img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover object-center" />
															</div>

															<div className="ml-4 flex flex-1 flex-col">
																<div>
																	<div className="flex justify-between text-sm md:text-base font-medium text-gray-900">
																		<h3>
																			<a href={`/product/${product.name}`}>{product.name}</a>
																		</h3>
																		<p className="ml-4">₹{product.price}</p>
																	</div>
																	<p className="mt-1 text-xs md:text-sm text-gray-500">{product.variant}</p>
																</div>
																<div className="flex flex-1 items-end justify-between text-xs md:text-sm mt-2">
																	<form className="max-w-xs mr-auto">
																		<label htmlFor="quantity-input" className="block mb-1 text-xs md:text-sm font-medium text-gray-600">
																			Quantity:
																		</label>
																		<div className="relative flex items-center max-w-[7rem]">
																			<button type="button" id="decrement-button" onClick={() => handleDecrement(product.itemCode)} className={`flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-7 ${product.qty === 1 ? "cursor-not-allowed" : ""}`} disabled={product.qty === 1}>
																				<svg className="w-2 h-2 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
																					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
																				</svg>
																			</button>
																			<input value={product.qty} className="bg-gray-50 border border-x-0 border-gray-300 h-7 text-center text-gray-900 text-sm block w-full py-2.5 focus:outline-none cursor-default" readOnly />
																			<button type="button" id="increment-button" onClick={() => handleIncrement(product.itemCode)} className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-7">
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
																				handleRemove(product.itemCode);
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

										<div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
											<div className="flex justify-between text-xs md:text-sm font-medium text-gray-900">
												<p>Subtotal</p>
												<p>₹{subTotal}</p>
											</div>
											<p className="mt-0.5 text-xs md:text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
											<div className="mt-6">
												<Link href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs md:text-base font-medium text-white shadow-sm hover:bg-[#045f59]">
													Checkout
												</Link>
											</div>
											<div className="mt-6 flex justify-center text-center text-xs md:text-sm text-gray-500">
												<p>
													or{" "}
													<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500" onClick={toggleCart}>
														Continue Shopping
														<span aria-hidden="true"> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cart;
