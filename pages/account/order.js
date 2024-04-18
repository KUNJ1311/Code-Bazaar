import Link from "next/link";
import mongoose from "mongoose";
import Order from "@/models/Order";
import FormatDateTime from "@/components/FormatDateTime";
import Error from "../404";

const MyOrder = ({ order, error }) => {
	return (
		<>
			{error ? (
				<Error />
			) : (
				<>
					<div className="flex justify-start items-center flex-col mt-5">
						<div className="text-xl md:text-2xl lg:text-3xl md:font-semibold font-medium text-gray-800">Order</div>
						<p className="md:text-base text-sm font-medium text-gray-600 flex justify-center flex-wrap">
							<span>{order.order_id} -&nbsp;</span>
							<span>{FormatDateTime(order.createdAt).formattedDate + " - " + FormatDateTime(order.createdAt).formattedTime}</span>
						</p>
					</div>
					<div className="flex sm:px-10 lg:flex-row flex-col lg:px-20 xl:px-32">
						<div className="px-4 lg:pb-8 pt-4 pb-0 padding-minus lg:w-1/2">
							<p className="md:text-xl text-lg font-medium padding-add">Order Summary</p>
							<div className="mt-3 rounded-lg border bg-white px-2 sm:px-3">
								<div className="flow-root">
									<ul role="list" className="divide-y divide-gray-200">
										{order.products?.map((product) => (
											<li key={product.slug} className="flex py-3">
												<div className="h-[102px] w-[85px] sm:h-[115px] sm:w-24 lg:w-32 lg:h-[153px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
													<img src={product.img} alt={product.title} className="h-full w-full object-cover object-center" />
												</div>
												<div className="md:ml-4 ml-2 flex flex-1 flex-col">
													<h3 className="flex text-xs sm:text-sm md:text-base font-medium text-gray-900">
														<Link href={`/product/${product.slug}`} className="hover:text-primary multi-line-ellipsis-orders">
															{product.title}
														</Link>
													</h3>
													<div className="flex flex-1 justify-between w-full h-full">
														<div className="flex flex-col justify-end h-full">
															<div className="text-xs md:text-sm">
																<div className="max-w-xs mr-auto">
																	<span className="block text-xs md:text-sm font-semibold text-gray-600">
																		Color: <span className="font-medium">{product.color.charAt(0).toUpperCase() + product.color.slice(1)}</span>
																	</span>
																</div>
															</div>
															<div className="text-xs md:text-sm">
																<div className="max-w-xs mr-auto">
																	<span className="block text-xs md:text-sm font-semibold text-gray-600">
																		Size: <span className="font-medium">{product.size}</span>
																	</span>
																</div>
															</div>
															<div className="text-xs md:text-sm">
																<div className="max-w-xs mr-auto">
																	<span className="block text-xs md:text-sm font-semibold text-gray-600">
																		Quantity: <span className="font-medium">{product.qty}</span>
																	</span>
																</div>
															</div>
														</div>
														<div className="flex items-end">
															<p className="text-xs sm:text-sm md:text-base font-medium">₹{product.price}</p>
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="mt-4 bg-gray-50 border border-gray-200 rounded-md pt-3 px-4 lg:mx-0 max-[300px]:mx-0 mx-4 mb-8 pb-4 lg:w-1/2">
							<h3 className="md:text-xl text-lg md:font-semibold font-medium leading-5 text-gray-800">Summary</h3>
							<div className="flex justify-between items-center w-full mt-3">
								<p className="md:text-lg text-base md:font-medium font-normal leading-4 text-gray-800">Payment Status</p>
								{order.hasPaid === true ? <p className="md:text-lg text-base md:font-semibold font-medium leading-4 text-primary">Paid</p> : <p className="md:text-lg text-base md:font-semibold font-medium leading-4 text-red-500">Pending</p>}
							</div>
							{order.hasPaid && (
								<div className="flex justify-between items-center w-full mt-3">
									<p className="md:text-lg text-base md:font-medium font-normal leading-4 text-gray-800">Delivery Status</p>
									<p className={`md:text-lg text-base md:font-semibold font-medium leading-4 ${order.deliveryStatus === "Delivered" ? "text-primary" : order.deliveryStatus === "Shipped" ? "text-indigo-500" : "text-red-500"}`}>{order.deliveryStatus}</p>
								</div>
							)}
							<div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
								<div className="flex justify-between w-full mt-5">
									<p className="md:text-base text-sm leading-4 text-gray-800">Subtotal</p>
									<p className="md:text-base text-sm leading-4 text-gray-600">₹{order.amount}</p>
								</div>
								<div className="flex justify-between items-center w-full">
									<p className="md:text-base text-sm leading-4 text-gray-800">Discount</p>
									<p className="md:text-base text-sm leading-4 text-gray-600">-₹28.00 (50%)</p>
								</div>
								<div className="flex justify-between items-center w-full">
									<p className="md:text-base text-sm leading-4 text-gray-800">Shipping</p>
									<p className="md:text-base text-sm leading-4 text-gray-600">₹8.00</p>
								</div>
							</div>
							<div className="flex justify-between items-center w-full mt-5">
								<p className="md:text-xl text-lg md:font-semibold font-medium leading-4 text-gray-800">Total</p>
								<p className="md:text-xl text-lg md:font-semibold font-medium leading-4 text-gray-600">₹{order.amount}</p>
							</div>

							<div className="flex justify-start xl:flex-col mt-3 flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-start">
								<div className="flex justify-start items-start flex-col space-y-2">
									<p className="md:text-base text-sm md:font-medium font-normal leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
									<p className="w-56 lg:w-full xl:w-48 text-left md:text-sm text-xs leading-5 text-gray-600">{order.address}</p>
								</div>
							</div>
							<div className="mt-4 w-full">
								<Link href="#" className="transition flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 md:text-base text-sm md:font-medium font-normal text-white hover:bg-primary-dark active:scale-95 shadow-slate-400 shadow-md active:shadow">
									Track Order
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export async function getServerSideProps(context) {
	try {
		if (!mongoose.connections[0].readyState) {
			await mongoose.connect(process.env.MONGO_URI);
		}
		let order = await Order.findOne({ order_id: context.query.id });
		if (order === null) {
			return { props: { error: true, order: {} } };
		}
		return {
			props: { error: false, order: JSON.parse(JSON.stringify(order)) },
		};
	} catch (error) {
		console.log(error);
	}
}

export default MyOrder;
