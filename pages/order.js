import Link from "next/link";

const Order = () => {
	const cart = [
		{
			itemCode: 1234,
			qty: 1,
			img: "/assets/t2.jpg",
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
			img: "/assets/t2.jpg",
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
			img: "/assets/t2.jpg",
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
			img: "/assets/t2.jpg",
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
			img: "/assets/t3.jpg",
			title: "Hoodie",
			name: "Eat, Sleep, Code, Repeat - Hoodiee eeeeeeeeeee sdas dsa dsa das das das dsad dsa das ",
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
				<h1 className="text-xl md:text-2xl lg:text-3xl md:font-semibold font-medium leading-4 md:leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
				<p className="md:text-sm text-xs font-medium md:leading-6 leading-4 text-gray-600">21st Mart 2021 at 10:34 PM</p>
			</div>
			<div className="flex sm:px-10 lg:flex-row flex-col lg:px-20 xl:px-32 font-poppins">
				<div className="px-4 lg:pb-8 md:pt-8 pt-4 pb-0 padding-minus lg:w-1/2">
					<p className="md:text-xl text-lg font-medium padding-add">Order Summary</p>
					<div className="mt-3 rounded-lg border bg-white px-2 sm:px-3">
						<div className="flow-root">
							<ul role="list" className="divide-y divide-gray-200">
								{cart?.map((product) => (
									<li key={product.itemCode} className="flex py-3">
										<div className="h-[102px] w-[85px] sm:h-[115px] sm:w-24 lg:w-32 lg:h-[153px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img src={product.img} alt={product.name} className="h-full w-full object-cover object-center" />
										</div>
										<div className="md:ml-4 ml-2 flex flex-1 flex-col">
											<h3 className="flex text-xs sm:text-sm md:text-base font-medium text-gray-900">
												<Link href={`/product/${product.name}`} className="hover:text-primary multi-line-ellipsis-orders">
													{product.name}
												</Link>
											</h3>
											<div className="flex flex-1 justify-between w-full h-full">
												<div className="flex flex-col justify-end h-full">
													<div className="text-xs md:text-sm">
														<div className="max-w-xs mr-auto">
															<span className="block text-xs md:text-sm font-semibold text-gray-600">
																Variant: <span className="font-medium">{product.variant}</span>
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
				<div className="mt-0 bg-gray-50 px-4 pt-8 lg:mx-0 mx-4 lg:mt-10 mb-8 lg:w-1/2">
					<h3 className="md:text-xl text-lg md:font-semibold font-medium leading-5 text-gray-800">Summary</h3>
					<div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
						<div className="flex justify-between w-full mt-5">
							<p className="md:text-base text-sm leading-4 text-gray-800">Subtotal</p>
							<p className="md:text-base text-sm leading-4 text-gray-600">₹56.00</p>
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
						<p className="md:text-xl text-lg md:font-semibold font-medium leading-4 text-gray-600">₹36.00</p>
					</div>
					<div className="flex justify-start mt-5 xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-start">
						<div className="flex justify-start items-start flex-col space-y-2 xl:mt-8">
							<p className="md:text-base text-sm md:font-semibold font-medium leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
							<p className="w-56 lg:w-full xl:w-48 text-left md:text-sm text-xs leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
						</div>
					</div>
					<div className="mt-4 lg:mb-0 mb-8 w-full">
						<Link href="#" className="transition flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 md:text-base text-sm md:font-medium font-normal text-white hover:bg-primary-dark active:scale-95 shadow-slate-400 shadow-md active:shadow">
							Track Order
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Order;
