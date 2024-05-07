import Link from "next/link";
import StarRating from "./StarRating";

const Products = (props) => {
	const { products, title } = props;
	return (
		<section className="md:px-5 w-full mx-auto flex flex-1">
			<div className="lg:container flex flex-wrap w-full mb-4 mx-auto">
				<div className="w-full">
					<div className="md:pl-12 pl-6 flex md:text-3xl text-xl font-normal text-gray-900 justify-between text-start mb-1 mt-2 md:mt-5 md:mb-5 relative">
						<div className="flex">
							<h1 className="m-1">{title}</h1>
							<span className="absolute md:top-11 top-8 md:w-32 w-24 h-1 bg-primary border rounded-xl border-transparent"></span>
						</div>
					</div>
					<div className="mt-2 flex flex-wrap items-center justify-center card-box">
						{products && Object.keys(products).length === 0 && (
							<div className="max-w-2xl p-4">
								<img className="rounded-3xl border border-indigo-200" src="/assets/outstock.jpg" alt="Out of Stock" />
							</div>
						)}
						{products &&
							Object.keys(products).map((data) => (
								<div key={products[data].slug} className="p-2 my-[15px] mx-2 md:w-[18%] w-[23%] min-w-[220px] lg:min-h-[420px] md:min-h-[390px] min-h-[376px] border rounded-[15px] border-slate-300 transition duration-200 ease md:shadow-md md:hover:shadow-lg hover:shadow-gray-300 relative shadow-gray-300 product-card flex flex-col">
									<Link href={`/product/${products[data].slug}`} className="flex items-center card-product-out">
										<div className="overflow-hidden border border-slate-300 rounded-[10px] cursor-pointer card-product-img" style={{ position: "relative", width: "100%", paddingTop: "120%" }}>
											<img className="absolute top-0 left-0 w-full h-full object-cover hover:scale-110 transition-my" src={products[data].img} alt={products[data].title} />
										</div>
									</Link>
									<div className="text-start py-[4px] px-2 flex flex-col flex-1 md:h-full justify-end">
										<h3 className="text-[#606063] lg:text-base md:text-sm text-xs font-semibold">Brand Name</h3>
										<Link href={`/product/${products[data].slug}`}>
											<h5 className="pt-[1px] mb-1 text-gray-900 lg:text-base md:text-sm text-xs font-medium cursor-pointer hover:text-primary multi-line-ellipsis">{products[data].title}</h5>
										</Link>
										<div className="flex flex-1 flex-col justify-end h-full">
											<div className="flex items-center mt-1 w-full">
												<StarRating rating={parseFloat(products[data].rating).toFixed(1)} Code={products[data].slug} />
											</div>
											<h4 className="space-x-2">
												<del className="lg:text-lg text-xs font-medium text-red-400">
													<span className="font-sans">₹</span>999
												</del>
												<span className="lg:text-xl text-base font-semibold text-primary">
													<span className="font-sans ">₹</span>
													{products[data].price}
												</span>
											</h4>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
