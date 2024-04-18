import Link from "next/link";
import StarRating from "./StarRating";

const Products = (props) => {
	const { products, title } = props;

	return (
		<section className="md:px-5 w-full mx-auto flex flex-1">
			<div className="lg:container flex flex-wrap w-full mb-4 mx-auto">
				<div className="w-full">
					<div className="md:pl-12 pl-6 flex md:text-3xl text-xl font-normal text-gray-900 justify-startr text-start mb-1 mt-2 md:mt-5 md:mb-5 relative">
						<h1 className="m-1">{title}</h1>
						<span className="absolute md:top-11 top-8 md:w-32 w-24 h-1 bg-primary border rounded-xl border-transparent"></span>
					</div>
					<div className="mt-2 flex flex-wrap items-center justify-center card-box">
						{products && Object.keys(products).length === 0 && (
							<div className="max-w-2xl p-4">
								<img className="rounded-3xl border border-indigo-200" src="/assets/outstock.jpg" alt="Out of Stock" />
							</div>
						)}
						{products &&
							Object.keys(products).map((data) => (
								<div key={products[data]._id} className="p-2 my-[15px] mx-2 md:w-[18%] w-[23%] min-w-[220px] lg:min-h-[420px] md:min-h-[390px] min-h-[376px] border rounded-[15px] border-slate-300 transition duration-200 ease md:shadow-md md:hover:shadow-lg hover:shadow-gray-300 relative shadow-gray-300 product-card flex flex-col">
									<Link href={`/product/${products[data].slug}`} className="flex items-center card-product-out">
										{/* <div className="overflow-hidden border border-slate-300 rounded-[20px] cursor-pointer card-product-img">
											<img className="transition-my object-cover hover:scale-110 " src={products[data].img} alt={products[data].title} />
										</div> */}
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
												<del className="lg:text-lg text-sm font-medium text-red-400">₹999</del>
												<span className="lg:text-xl text-base font-semibold text-primary">₹{products[data].price}</span>
											</h4>
										</div>
									</div>
									{/* <button
										type="button"
										onClick={() => {
											dispatch(addToCart(products[data].slug, 1, products[data].price, products[data].title, products[data].size[0], products[data].color[0], products[data].img));
											dispatch(saveCart());
											toast.success(
												<>
													<div>
														<p className="font-semibold">Product Added Successfully</p>
														<p className="text-xs text-gray-900 lg:text-sm font-medium line-clamp-1">{products[data].title}</p>
													</div>
												</>,
												{ autoClose: 4000 }
											);
										}}
										className="button-style leading-10 rounded-full flex justify-center items-center md:w-10 md:h-10 w-8 h-8 absolute bottom-3 md:bottom-4 md:right-4 right-3 cursor-pointer font-normal max-[300px]:hidden"
									>
										<svg className="md:w-6 md:h-6 w-5 h-5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_2)">
												<path
													d="M0 1.125C0 1.02554 0.0395088 0.930161 0.109835 0.859835C0.180161 0.789509 0.275544 0.75 0.375 0.75H1.5C1.58365 0.750023 1.66489 0.778013 1.7308 0.829519C1.79671 0.881024 1.84351 0.953088 1.86375 1.03425L2.1675 2.25H10.875C10.9305 2.25003 10.9852 2.26237 11.0353 2.28611C11.0855 2.30986 11.1297 2.34443 11.1648 2.38732C11.2 2.43022 11.2252 2.48038 11.2386 2.53419C11.252 2.588 11.2534 2.64412 11.2425 2.6985L10.4925 6.4485C10.4761 6.53027 10.4329 6.60425 10.3697 6.65871C10.3066 6.71318 10.227 6.74504 10.1437 6.74925L3.096 7.10325L3.31125 8.25H9.75C9.84946 8.25 9.94484 8.28951 10.0152 8.35983C10.0855 8.43016 10.125 8.52554 10.125 8.625C10.125 8.72446 10.0855 8.81984 10.0152 8.89017C9.94484 8.96049 9.84946 9 9.75 9H3C2.91257 8.99992 2.82792 8.96929 2.76068 8.91342C2.69344 8.85755 2.64784 8.77993 2.63175 8.694L1.5075 2.70525L1.2075 1.5H0.375C0.275544 1.5 0.180161 1.46049 0.109835 1.39017C0.0395088 1.31984 0 1.22446 0 1.125ZM2.3265 3L2.9565 6.35925L9.8145 6.015L10.4175 3H2.3265ZM3.75 9C3.35218 9 2.97064 9.15804 2.68934 9.43934C2.40804 9.72064 2.25 10.1022 2.25 10.5C2.25 10.8978 2.40804 11.2794 2.68934 11.5607C2.97064 11.842 3.35218 12 3.75 12C4.14782 12 4.52936 11.842 4.81066 11.5607C5.09196 11.2794 5.25 10.8978 5.25 10.5C5.25 10.1022 5.09196 9.72064 4.81066 9.43934C4.52936 9.15804 4.14782 9 3.75 9ZM9 9C8.60218 9 8.22064 9.15804 7.93934 9.43934C7.65804 9.72064 7.5 10.1022 7.5 10.5C7.5 10.8978 7.65804 11.2794 7.93934 11.5607C8.22064 11.842 8.60218 12 9 12C9.39782 12 9.77936 11.842 10.0607 11.5607C10.342 11.2794 10.5 10.8978 10.5 10.5C10.5 10.1022 10.342 9.72064 10.0607 9.43934C9.77936 9.15804 9.39782 9 9 9ZM3.75 9.75C3.94891 9.75 4.13968 9.82902 4.28033 9.96967C4.42098 10.1103 4.5 10.3011 4.5 10.5C4.5 10.6989 4.42098 10.8897 4.28033 11.0303C4.13968 11.171 3.94891 11.25 3.75 11.25C3.55109 11.25 3.36032 11.171 3.21967 11.0303C3.07902 10.8897 3 10.6989 3 10.5C3 10.3011 3.07902 10.1103 3.21967 9.96967C3.36032 9.82902 3.55109 9.75 3.75 9.75ZM9 9.75C9.19891 9.75 9.38968 9.82902 9.53033 9.96967C9.67098 10.1103 9.75 10.3011 9.75 10.5C9.75 10.6989 9.67098 10.8897 9.53033 11.0303C9.38968 11.171 9.19891 11.25 9 11.25C8.80109 11.25 8.61032 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5C8.25 10.3011 8.32902 10.1103 8.46967 9.96967C8.61032 9.82902 8.80109 9.75 9 9.75Z"
													fill="black"
												/>
												<circle cx="9.5" cy="2.5" r="2.5" fill="white" />
												<path d="M10.9375 2.25H9.75V1.0625C9.75 1.02813 9.72188 1 9.6875 1H9.3125C9.27812 1 9.25 1.02813 9.25 1.0625V2.25H8.0625C8.02813 2.25 8 2.27812 8 2.3125V2.6875C8 2.72188 8.02813 2.75 8.0625 2.75H9.25V3.9375C9.25 3.97188 9.27812 4 9.3125 4H9.6875C9.72188 4 9.75 3.97188 9.75 3.9375V2.75H10.9375C10.9719 2.75 11 2.72188 11 2.6875V2.3125C11 2.27812 10.9719 2.25 10.9375 2.25Z" fill="black" />
												<path d="M9.5 0C8.11942 0 7 1.11942 7 2.5C7 3.88058 8.11942 5 9.5 5C10.8806 5 12 3.88058 12 2.5C12 1.11942 10.8806 0 9.5 0ZM9.5 4.57589C8.35379 4.57589 7.42411 3.64621 7.42411 2.5C7.42411 1.35379 8.35379 0.424107 9.5 0.424107C10.6462 0.424107 11.5759 1.35379 11.5759 2.5C11.5759 3.64621 10.6462 4.57589 9.5 4.57589Z" fill="black" />
											</g>
											<defs>
												<clipPath id="clip0_1_2">
													<rect width="25" height="25" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</button> */}
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
