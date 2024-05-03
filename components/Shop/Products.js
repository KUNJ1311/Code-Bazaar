import Link from "next/link";
import StarRating from "./StarRating";
import { IoFilter } from "react-icons/io5";
import { useEffect, useState } from "react";

const Products = (props) => {
	const { products, title } = props;
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	//* Close login page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsFilterOpen(false);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	return (
		<section className="md:px-5 w-full mx-auto flex flex-1">
			<div className="lg:container flex flex-wrap w-full mb-4 mx-auto">
				<div className="w-full">
					<div className="md:pl-12 pl-6 flex md:text-3xl text-xl font-normal text-gray-900 justify-between text-start mb-1 mt-2 md:mt-5 md:mb-5 relative">
						<div className="flex">
							<h1 className="m-1">{title}</h1>
							<span className="absolute md:top-11 top-8 md:w-32 w-24 h-1 bg-primary border rounded-xl border-transparent"></span>
						</div>
						<div className="relative flex md:text-xl text-base items-center justify-center">
							<div className="flex items-center">
								<button type="button" className={`pr-6 flex items-center hover:text-primary ${isFilterOpen ? "text-primary" : ""}`} id="filter" aria-controls="filter-menu" aria-expanded={isFilterOpen} aria-haspopup="true" onClick={toggleFilter} role="button">
									<span className="mr-2">Filters</span>
									<IoFilter />
								</button>
							</div>
							{isFilterOpen && (
								<div className="absolute right-9 z-10 top-10 w-36 origin-top-right rounded-md divide-y divide-gray-200 bg-white py-1 shadow-lg " role="menu" aria-orientation="vertical" aria-labelledby="filter" id="filter-menu" tabIndex="-1">
									<div className="text-gray-700 cursor-pointer hover:bg-slate-200 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1">
										Top Ratings
									</div>
									<div className="text-gray-700 cursor-pointer hover:bg-slate-200 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1">
										Most Popular
									</div>
									<div className="text-gray-700 cursor-pointer hover:bg-slate-200 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1">
										Price: High to Low
									</div>
									<div className="text-gray-700 cursor-pointer hover:bg-slate-200 block px-2 py-2 text-sm font-medium text-center" role="menuitem" tabIndex="-1">
										Price: Low to High
									</div>
								</div>
							)}
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
