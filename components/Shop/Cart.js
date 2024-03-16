import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import CartList from "./CartList";

const Cart = (props) => {
	const { cart, subTotal } = useAppSelector((state) => state.cart);

	return (
		<>
			<div className="pointer-events-auto w-screen max-w-md">
				<div className="flex h-full flex-col">
					<div className="flex-1 md:rounded-bl-2xl px-4 py-6 sm:px-6 md:pl-4 lg:pl-5 border-gray-300 border-b-2 border-l-2 bg-white overflow-y-auto overflow-x-hidden scroller remove-scrollbar footer-mobile">
						<div className="flex items-start justify-between">
							<div className="text-lg font-medium text-gray-900">Shopping cart</div>
							<div className="ml-3 flex h-7 items-center">
								<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={props.toggleCart}>
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
										<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500" onClick={props.toggleCart}>
											Continue Shopping
											<span aria-hidden="true"> &rarr;</span>
										</button>
									</p>
								</div>
							</>
						) : (
							<>
								<CartList />
								<div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
									<div className="flex justify-between text-xs md:text-sm font-medium text-gray-900">
										<p>Subtotal</p>
										<p>₹{subTotal}</p>
									</div>
									<p className="mt-0.5 text-xs md:text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
									<div className="mt-6">
										<Link href="/checkout" className="transition flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs md:text-base font-medium text-white hover:bg-primary-dark active:scale-95 shadow-slate-400 shadow-md active:shadow" onClick={props.toggleCart}>
											Checkout
										</Link>
									</div>
									<div className="mt-6 flex justify-center text-center text-xs md:text-sm text-gray-500">
										<p>
											or{" "}
											<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500" onClick={props.toggleCart}>
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
		</>
	);
};
export default Cart;
