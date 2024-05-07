import Image from "next/image";
import Link from "next/link";

const incentives = [
	{
		name: "Free Shipping",
		description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
		imageSrc: "./assets/free-ship.svg",
	},
	{
		name: "24/7 Customer Support",
		description: "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
		imageSrc: "./assets/support.svg",
	},
	{
		name: "Fast Shopping Cart",
		description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
		imageSrc: "./assets/fast-cart.svg",
	},
];

const Content = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="mt-4">
				<div className="pt-32 overflow-hidden sm:pt-14">
					<div className="bg-gray-800">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="relative pt-48 pb-16 sm:pb-24">
								<div>
									<h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
										Final Stock.
										<br />
										Up to 70% off.
									</h2>
									<div className="mt-6 text-base">
										<Link href="/shop" className="font-semibold text-white">
											Shop the sale<span aria-hidden="true"> &rarr;</span>
										</Link>
									</div>
								</div>

								<div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
									<div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
										<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
											<div className="flex-shrink-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/m4.jpg" alt="" />
											</div>

											<div className="mt-6 flex-shrink-0 sm:mt-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/t2.jpg" alt="" />
											</div>
										</div>
										<div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
											<div className="flex-shrink-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/t4.jpg" alt="" />
											</div>

											<div className="mt-6 flex-shrink-0 sm:mt-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/t5.jpg" alt="" />
											</div>
										</div>
										<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
											<div className="flex-shrink-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/t6.jpg" alt="" />
											</div>

											<div className="mt-6 flex-shrink-0 sm:mt-0">
												<Image width={256} height={256} className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/assets/t3.jpg" alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
					<div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
						{incentives.map((incentive) => (
							<div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
								<div className="sm:flex-shrink-0">
									<div className="flow-root">
										<img className="w-28 h-24 mx-auto" src={incentive.imageSrc} alt="" />
									</div>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
									<h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
									<p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
