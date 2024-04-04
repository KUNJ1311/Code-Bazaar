import Order from "@/models/Order";
import mongoose from "mongoose";
import Link from "next/link";
import { useState } from "react";

const Orders = () => {
	const orders = [
		{
			id: 1,
			orderNumber: "WU88191111",
			totalAmount: "₹160.00",
			status: "Cancelled",
			time: "Jul 6, 2021",
			items: [
				{ id: 1, name: "eat sleep code", img: "/assets/t3.jpg", variant: "Blue", size: "SM", quantity: 2, price: 899 },
				// Add more items for this order as needed
			],
		},
		{
			id: 2,
			orderNumber: "WU88192222",
			totalAmount: "₹180.00",
			status: "Delivered",
			time: "Jul 6, 2021",
			items: [
				{ id: 112, name: "example item", img: "/assets/t5.jpg", variant: "Red", size: "M", quantity: 1, price: 99 },
				{ id: 33, name: "example item", img: "/assets/m3.jpg", variant: "Reddd", size: "XL", quantity: 31, price: 999 },
				// Add more items for this order as needed
			],
		},
		{
			id: 3,
			orderNumber: "WU881923222",
			totalAmount: "₹1300.00",
			status: "Shipped",
			time: "Jul 7, 2022",
			items: [
				{ id: 1312, name: "example item", img: "/assets/t2.jpg", variant: "Red", size: "M", quantity: 1, price: 123 },
				{ id: 333, name: "example item", img: "/assets/m4.jpg", variant: "Reddd", size: "XL", quantity: 31, price: 899 },
				// Add more items for this order as needed
			],
		},
		// Add more orders as needed
	];

	const [openMenuId, setOpenMenuId] = useState(null);

	const toggleMenu = (orderId) => {
		setOpenMenuId(openMenuId === orderId ? null : orderId);
	};

	return (
		<div className="bg-gray-50 font-poppins flex justify-center">
			<main className="py-6 w-full">
				<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
					<div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Order History</h1>
						<p className="mt-2 text-sm text-gray-500">Check the status of recent orders.</p>
					</div>
				</div>

				{orders.map((order) => (
					<section key={order.id} aria-labelledby={`recent-heading-${order.id}`} className="mt-5">
						<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
							<div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
								<div className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
									<h3 className="sr-only">
										Order placed on <time>{order.time}</time>
									</h3>

									<div className="relative flex items-center p-4 border-b border-gray-200 sm:grid sm:grid-cols-4 sm:gap-x-6">
										<dl className="flex-1 gap-y-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
											<div>
												<dt className="font-medium sm:text-base text-sm text-gray-900">Order number</dt>
												<dd className="mt-1 sm:text-sm text-xs text-gray-700">{order.orderNumber}</dd>
											</div>
											<div className="">
												<dt className="font-medium sm:text-base text-sm text-gray-900">Total amount</dt>
												<dd className="mt-1 sm:text-sm text-xs font-medium text-gray-700">{order.totalAmount}</dd>
											</div>
											<div className="absolute sm:top-[-13px] top-[-11px]">
												<dd className={`sm:text-sm text-xs font-medium flex justify-center text-white rounded-full border border-gray-200 px-2 w-full py-[2px] text-center ${`bg-${order.status === "Delivered" ? "primary" : order.status === "Shipped" ? "indigo-500" : "red-500"}`}`}>
													{order.status} - {order.time}
												</dd>
											</div>
										</dl>

										<div className="relative flex justify-end lg:hidden">
											<div className="flex items-center">
												<button type="button" className="-m-2 flex items-center text-gray-400 hover:text-gray-500" id={`order-menu-button-${order.id}`} aria-expanded={openMenuId === order.id} aria-haspopup="true" onClick={() => toggleMenu(order.id)}>
													<span className="sr-only">Options for order {order.orderNumber}</span>
													<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
													</svg>
												</button>
											</div>
											<div className="relative mt-4">
												{openMenuId === order.id && (
													<div className="absolute right-0 z-10 mt-1 w-36 origin-top-right rounded-md divide-y divide-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby={`order-menu-button-${order.id}`} tabIndex="-1">
														<a href="#" className="text-gray-700 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1" id={`order-menu-option-0-${order.id}`}>
															View Order
														</a>
														<a href="#" className="text-gray-700 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1" id={`order-menu-option-1-${order.id}`}>
															View Invoice
														</a>
													</div>
												)}
											</div>
										</div>
										<div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
											<a href="#" className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												<span>View Order</span>
												<span className="sr-only">{order.orderNumber}</span>
											</a>
											<a href="#" className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												<span>View Invoice</span>
												<span className="sr-only">for order {order.orderNumber}</span>
											</a>
										</div>
									</div>

									{/* Item list */}
									<h4 className="sr-only">Items</h4>
									<ul role="list" className="divide-y divide-gray-200">
										{order.items.map((item) => (
											<li key={item.id} className="p-3">
												<div className="flex items-center sm:items-start">
													<div className="flex-shrink-0 md:w-28 md:h-[134px] lg:w-32 lg:h-[153px] h-[102px] w-[85px]  sm:h-[115px] sm:w-24 overflow-hidden">
														<img src={item.img} alt={item.name} className="md:w-28 md:h-[134px] lg:w-32 lg:h-[153px] h-[102px] w-[85px]  sm:h-[115px] sm:w-24 rounded-md border border-gray-200 object-center object-cover" />
													</div>
													<div className="flex flex-col flex-1 w-full md:h-[134px] lg:h-[153px] h-[102px] sm:h-[115px] md:pl-5 pl-3">
														<div className="flex flex-1 justify-between w-full h-full flex-col">
															<h3 className="flex text-xs sm:text-sm md:text-base font-medium text-gray-900">
																<Link href={`/product/${item.name}`} className="hover:text-primary multi-line-ellipsis-orders">
																	{item.name}
																</Link>
															</h3>

															{/* Item details */}
															<div className="flex flex-row h-full justify-between items-end">
																<div className="flex flex-col justify-end">
																	<div className="text-xs md:text-sm">
																		<div className="max-w-xs mr-auto">
																			<span className="block text-xs md:text-sm font-semibold text-gray-600">
																				Variant: <span className="font-medium">{item.variant}</span>
																			</span>
																		</div>
																	</div>
																	<div className="text-xs md:text-sm">
																		<div className="max-w-xs mr-auto">
																			<span className="block text-xs md:text-sm font-semibold text-gray-600">
																				Size: <span className="font-medium">{item.size}</span>
																			</span>
																		</div>
																	</div>
																	<div className="text-xs md:text-sm">
																		<div className="max-w-xs mr-auto">
																			<span className="block text-xs md:text-sm font-semibold text-gray-600">
																				Quantity: <span className="font-medium">{item.quantity}</span>
																			</span>
																		</div>
																	</div>
																</div>
																<div className="flex items-end">
																	<p className="text-xs sm:text-sm md:text-base font-medium">₹{item.price}</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</section>
				))}
			</main>
		</div>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let orders = await Order.find({});

	return {
		props: { orders: orders },
	};
}

export default Orders;
