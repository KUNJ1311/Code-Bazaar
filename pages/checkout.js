import CartList from "@/components/Shop/CartList";
import { FaAddressCard } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const Checkout = () => {
	const { cart, subTotal } = useAppSelector((state) => state.cart);

	return (
		<>
			<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
				<div className="px-4 lg:pb-8 pt-8 pb-0">
					<p className="text-xl font-medium">Order Summary</p>
					<p className="text-gray-400">Review Cart Items</p>
					<div className="mt-3 rounded-lg border bg-white px-2 sm:px-6">
						{cart.length == 0 ? (
							<>
								<div className="flex flex-col justify-center">
									<div className="pt-7 pb-5 flex justify-center">
										<img src="/cart.svg" className="w-44 h-44" alt="Empty Cart" />
									</div>
									<span className="text-center text-2xl text-red-800 font-bold font-spartan">OOPS!</span>
									<span className="text-center text-xl text-black font-bold font-spartan mt-1">Your Cart Is Empty...</span>
								</div>
								<div className="pt-4 pb-5 flex justify-center text-center text-xs md:text-sm text-gray-500">
									<p>
										<Link href={"/shop"} className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500">
											Continue Shopping
											<span aria-hidden="true"> &rarr;</span>
										</Link>
									</p>
								</div>
							</>
						) : (
							<>
								<CartList />

								<div className="border-t border-gray-200 py-3 mt-6">
									<div className="flex justify-between font-medium text-gray-900">
										<p className="font-medium text-gray-900 text-sm">Subtotal</p>
										<p className="font-semibold text-gray-900 text-xl">₹{subTotal}</p>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="mt-0 bg-gray-50 px-4 pt-8 lg:mx-0 mx-4 lg:mt-10">
					<p className="text-xl font-medium">Delivery Details</p>
					<p className="text-gray-400">Complete your order by providing your delivery details.</p>
					<div className="">
						<label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
							Email
						</label>
						<div className="relative">
							<input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="your.email@gmail.com" />
							<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
								</svg>
							</div>
						</div>
						<div className="flex  flex-col sm:flex-row sm:space-x-2">
							<div className="flex flex-col flex-1">
								<label htmlFor="Name" className="mt-4 mb-2 block text-sm font-medium">
									Name
								</label>
								<div className="relative">
									<input type="text" id="Name" name="Name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="Enter Your Name" />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<FaAddressCard className="h-4 w-4 text-gray-400 " />
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-1">
								<label htmlFor="phone" className="mt-4 mb-2 block text-sm font-medium">
									Phone
								</label>
								<div className="relative">
									<input type="text" id="phone" name="phone" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="Enter Your Phone No." />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<HiPhone className="h-4 w-4 text-gray-400 " />
									</div>
								</div>
							</div>
						</div>
						<label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">
							Billing Address
						</label>
						<div className="relative mb-3">
							<input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="Street Address" />
							<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
								<img className="h-4 w-4 object-contain" src="/india.svg" alt="" />
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 space-y-3">
							<input type="text" name="billing-city" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="City" />
							<input type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary focus:ring-primary" placeholder="State" />
							<input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-primary focus:ring-primary" placeholder="ZIP" />
						</div>

						<div className="mt-6 border-t border-b py-2">
							<div className="flex items-center justify-between">
								<p className="text-sm font-medium text-gray-900">Subtotal</p>
								<p className="font-semibold text-gray-900">₹{subTotal}</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-sm font-medium text-gray-900">Shipping</p>
								<p className="font-semibold text-gray-900">₹8.00</p>
							</div>
						</div>
						<div className="mt-6 flex items-center justify-between">
							<p className="text-sm font-medium text-gray-900">Total</p>
							<p className="text-2xl font-semibold text-gray-900">₹408.00</p>
						</div>
					</div>
					<div className="mt-4 mb-8 w-full">
						<Link href="#" className="transition flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark active:scale-95 shadow-slate-400 shadow-md active:shadow">
							Place Order
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
