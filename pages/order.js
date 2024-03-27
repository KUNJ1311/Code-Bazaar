import Link from "next/link";

const Order = () => {
	const cart = [
		{
			itemCode: 1234,
			qty: 1,
			img: "/t2.jpg",
			title: "Hoodie",
			name: "Eat, Sleep, Code, Repeat - Hoodie",
			rating: 1.6,
			mrp: 986,
			price: 799,
			size: "2XL",
			variant: "Black",
		},
		{
			itemCode: 234,
			qty: 1,
			img: "/t2.jpg",
			title: "Hoodie",
			name: "Eat, Sleep, Code, Repeat - Hoodie",
			rating: 1.6,
			mrp: 986,
			price: 799,
			size: "2XL",
			variant: "Black",
		},
		{
			itemCode: 1234534,
			qty: 1,
			img: "/t2.jpg",
			title: "Hoodie",
			name: "Eat, Sleep, Code, Repeat - Hoodie",
			rating: 1.6,
			mrp: 986,
			price: 799,
			size: "2XL",
			variant: "Black",
		},
		{
			itemCode: 12334,
			qty: 1,
			img: "/t2.jpg",
			title: "Hoodi3e",
			name: "Hoodie",
			rating: 4.8,
			mrp: 986,
			price: 799,
			size: "2XL",
			variant: "Black",
		},
		{
			itemCode: 123314,
			qty: 1,
			img: "/t3.jpg",
			title: "Hoodie",
			name: "Eat, Sleep, Code, Repeat - Hoodiee eeeeeeeeeee eeeeeek  eeeeeeeeeeee eeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeek",
			rating: 3.5,
			mrp: 986,
			price: 7992,
			size: "2XL",
			variant: "Pink",
		},
	];

	return (
		<>
			<div className="flex justify-start items-center space-y-2 flex-col mt-4 font-poppins">
				<h1 className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
				<p className="text-sm font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
			</div>
			<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 font-poppins">
				<div className="px-4 lg:pb-8 pt-8 pb-0 padding-minus">
					<p className="text-xl font-medium padding-add">Order Summary</p>
					<div className="mt-3 rounded-lg border bg-white px-2 sm:px-6 ">
						<div className="mt-8">
							<div className="flow-root">
								<ul role="list" className="-my-6 divide-y divide-gray-200 pb-5">
									{cart?.map((product) => (
										<li key={product.itemCode} className="flex py-6">
											<div className="h-[85px] w-[85px] cart-img-small sm:h-24 sm:w-24 md:h-30 md:w-30 lg:w-32 lg:h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
												<img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover object-center" />
											</div>

											<div className="ml-4 flex flex-1 flex-col">
												<div>
													<div className="flex justify-between text-xs sm:text-sm md:text-base font-medium text-gray-900">
														<h3>
															<a href={`/product/${product.name}`} className="hover:text-primary multi-line-ellipsis">
																{product.name}
															</a>
														</h3>
														<p className="ml-4">₹{product.price}</p>
													</div>
												</div>
												<div className="flex flex-col">
													<div className="flex flex-1 items-end justify-between text-xs md:text-sm">
														<div className="max-w-xs mr-auto">
															<span className="block text-xs md:text-sm font-semibold text-gray-600">
																Variant: <span className="font-medium">{product.variant}</span>
															</span>
														</div>
													</div>
													<div className="flex flex-1 items-end justify-between text-xs md:text-sm">
														<div className="max-w-xs mr-auto">
															<span className="block text-xs md:text-sm font-semibold text-gray-600">
																Size: <span className="font-medium">{product.size}</span>
															</span>
														</div>
													</div>
													<div className="flex flex-1 items-end justify-between text-xs md:text-sm">
														<div className="max-w-xs mr-auto">
															<span className="block text-xs md:text-sm font-semibold text-gray-600">
																Quantity: <span className="font-medium">{product.qty}</span>
															</span>
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
				</div>
				<div className="mt-0 bg-gray-50 px-4 pt-8 lg:mx-0 mx-4 lg:mt-10 mb-8">
					<h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
					<div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
						<div className="flex justify-between w-full mt-5">
							<p className="text-base leading-4 text-gray-800">Subtotal</p>
							<p className="text-base leading-4 text-gray-600">₹56.00</p>
						</div>
						<div className="flex justify-between items-center w-full">
							<p className="text-base leading-4 text-gray-800">Discount</p>
							<p className="text-base leading-4 text-gray-600">-₹28.00 (50%)</p>
						</div>
						<div className="flex justify-between items-center w-full">
							<p className="text-base leading-4 text-gray-800">Shipping</p>
							<p className="text-base leading-4 text-gray-600">₹8.00</p>
						</div>
					</div>
					<div className="flex justify-between items-center w-full mt-5">
						<p className="text-xl font-semibold leading-4 text-gray-800">Total</p>
						<p className="text-xl font-semibold leading-4 text-gray-600">₹36.00</p>
					</div>
					<div className="flex justify-start mt-5 xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-start">
						<div className="flex justify-start items-start flex-col space-y-2 xl:mt-8">
							<p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
							<p className="w-56 lg:w-full xl:w-48 text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
						</div>
					</div>
					<div className="mt-4 lg:mb-0 mb-8 w-full">
						<Link href="#" className="transition flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark active:scale-95 shadow-slate-400 shadow-md active:shadow">
							Track Order
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Order;
