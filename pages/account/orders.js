import FormatDateTime from "@/components/FormatDateTime";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Orders = () => {
	const [orders, setOrders] = useState();
	const [openMenuId, setOpenMenuId] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		const fetchOrders = async () => {
			try {
				const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order/myorders`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ token: JSON.parse(token).token }),
				});
				const res = await data.json();
				setOrders(res.orders);
			} catch (error) {
				console.log({ error });
			}
		};
		if (!token) {
			router.push("/");
		} else {
			fetchOrders();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toggleMenu = (orderId) => {
		setOpenMenuId(openMenuId === orderId ? null : orderId);
	};

	return (
		<>
			<Head>
				<title>Orders - CodeBazaar</title>
			</Head>
			<div className="bg-gray-50 h-full flex-1 flex justify-center">
				<main className="py-6 w-full">
					<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
						<div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
							<h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">Your Order History</h1>
							{orders && orders.length > 0 ? <p className="mt-2 text-center text-sm text-gray-500">Check the status of recent orders.</p> : <p className="text-lg text-center font-medium tracking-tight text-gray-900 sm:text-xl">No order records found</p>}
						</div>
					</div>
					{orders && orders.length > 0 ? (
						orders.map((order) => (
							<section key={order.order_id} aria-labelledby={`recent-heading-${order.order_id}`} className="mt-5">
								<div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
									<div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
										<div className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
											<h3 className="sr-only">
												Order placed on <time>{FormatDateTime(order.createdAt).formattedDate + " - " + FormatDateTime(order.createdAt).formattedTime}</time>
											</h3>

											<div className="relative flex items-center p-4 border-b border-gray-200 sm:grid sm:grid-cols-4 sm:gap-x-6">
												<dl className="flex-1 gap-y-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-2 lg:col-span-2">
													<div className="sm:col-span-1 col-span-2">
														<dt className="font-medium sm:text-base text-sm text-gray-900">Order Id</dt>
														<dd className="mt-1 sm:text-sm text-xs font-medium text-gray-700">{order.order_id}</dd>
													</div>
													<div>
														<dt className="font-medium sm:text-base text-sm text-gray-900">Total Amount</dt>
														<dd className="mt-1 sm:text-sm text-xs font-medium text-gray-700">
															<span className="font-sans">₹</span>
															{order.amount}
														</dd>
													</div>
												</dl>
												<div className="absolute sm:top-[-13px] top-[-11px] left-4">
													{order.hasPaid === true ? (
														<dd className={`sm:text-sm text-xs font-medium flex justify-center text-white rounded-full border border-gray-200 px-2 w-full py-[2px] text-center ${order.deliveryStatus === "Delivered" ? "bg-primary" : order.deliveryStatus === "Shipped" ? "bg-indigo-500" : "bg-red-500"}`}>{order.deliveryStatus === "Preparing" ? `${order.deliveryStatus}` : `${order.deliveryStatus} On ${FormatDateTime(order.createdAt).formattedDate}`}</dd>
													) : (
														<dd className={`sm:text-sm text-xs font-medium flex justify-center text-white rounded-full border border-gray-200 px-2 w-full py-[2px] text-center bg-red-500`}>Payment Pending</dd>
													)}
												</div>

												<div className="relative flex justify-end lg:hidden">
													<div className="flex items-center">
														<button type="button" className="-m-2 flex items-center text-gray-400 hover:text-gray-500" id={`order-menu-button-${order.order_id}`} aria-expanded={openMenuId === order.order_id} aria-haspopup="true" onClick={() => toggleMenu(order.order_id)}>
															<span className="sr-only">Options for order {order.order_id}</span>
															<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
															</svg>
														</button>
													</div>
													<div className="relative mt-4">
														{openMenuId === order.order_id && (
															<div className="absolute right-0 z-10 mt-1 w-36 origin-top-right rounded-md divide-y divide-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby={`order-menu-button-${order.order_id}`} tabIndex="-1">
																<Link href={`/account/order?id=${order.order_id}`} className="text-gray-700 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1" id={`order-menu-option-0-${order.order_id}`}>
																	View Order
																</Link>
																<Link href="#" className="text-gray-700 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1" id={`order-menu-option-1-${order.order_id}`}>
																	View Invoice
																</Link>
															</div>
														)}
													</div>
												</div>
												<div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
													<Link href={`/account/order?id=${order.order_id}`} className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
														<span>View Order</span>
														<span className="sr-only">{order.order_id}</span>
													</Link>
													<Link href="#" className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
														<span>View Invoice</span>
														<span className="sr-only">for order {order.order_id}</span>
													</Link>
												</div>
											</div>

											{/* Item list */}
											<h4 className="sr-only">Items</h4>
											<ul role="list" className="divide-y divide-gray-200">
												{order.products.map((item) => (
													<li key={item.slug} className="p-3">
														<div className="flex items-center sm:items-start">
															<div className="flex-shrink-0 md:w-28 md:h-[134px] lg:w-32 lg:h-[153px] h-[102px] w-[85px]  sm:h-[115px] sm:w-24 overflow-hidden">
																<img src={item.img} alt={item.title} className="md:w-28 md:h-[134px] lg:w-32 lg:h-[153px] h-[102px] w-[85px]  sm:h-[115px] sm:w-24 rounded-md border border-gray-200 object-center object-cover" />
															</div>
															<div className="flex flex-col flex-1 w-full md:h-[134px] lg:h-[153px] h-[102px] sm:h-[115px] md:pl-5 pl-3">
																<div className="flex flex-1 justify-between w-full h-full flex-col">
																	<h3 className="flex text-xs sm:text-sm md:text-base font-medium text-gray-900">
																		<Link href={`/product/${item.slug}`} className="hover:text-primary multi-line-ellipsis-orders">
																			{item.title}
																		</Link>
																	</h3>

																	{/* Item details */}
																	<div className="flex flex-row h-full justify-between items-end">
																		<div className="flex flex-col justify-end">
																			<div className="text-xs md:text-sm">
																				<div className="max-w-xs mr-auto">
																					<span className="block text-xs md:text-sm font-semibold text-gray-600">
																						Color: <span className="font-medium">{item.color.charAt(0).toUpperCase() + item.color.slice(1)}</span>
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
																						Quantity: <span className="font-medium">{item.qty}</span>
																					</span>
																				</div>
																			</div>
																		</div>
																		<div className="flex items-end">
																			<p className="text-xs sm:text-sm md:text-base font-medium">
																				<span className="font-sans">₹</span>
																				{item.price}
																			</p>
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
						))
					) : (
						<img src="/assets/noorders.svg" className="flex mx-auto justify-center m-5  " alt="No orders found" />
					)}
				</main>
			</div>
		</>
	);
};

export default Orders;
