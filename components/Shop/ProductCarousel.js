import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ProductCarousel = () => {
	const maxScrollWidth = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef(null);

	const movePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const moveNext = () => {
		if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction) => {
		if (direction === "prev") {
			return currentIndex <= 0;
		}

		if (direction === "next" && carousel.current !== null) {
			return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
		}

		return false;
	};

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
	}, []);

	const data = [
		{
			img: "/tshirts.jpg",
			link: "/shop/tshirts",
			name: "T-Shirts",
		},
		{
			img: "/hoodie.jpg",
			link: "/shop/hoodies",
			name: "Hoodies",
		},
		{
			img: "/mugs.jpg",
			link: "/shop/mugs",
			name: "Mugs",
		},
		{
			img: "/tshirts.jpg",
			link: "/shop/tshirts",
			name: "T-Shirts",
		},
		{
			img: "/tshirts.jpg",
			link: "/shop/tshirts",
			name: "T-Shirts",
		},
		{
			img: "/hoodie.jpg",
			link: "/shop/hoodies",
			name: "Hoodies",
		},
		{
			img: "/mugs.jpg",
			link: "/shop/mugs",
			name: "Mugs",
		},
		{
			img: "/mugs.jpg",
			link: "/shop/mugs",
			name: "Mugs",
		},
		{
			img: "/tshirts.jpg",
			link: "/shop/tshirts",
			name: "T-Shirts",
		},
		{
			img: "/tshirts.jpg",
			link: "/shop/tshirts",
			name: "T-Shirts",
		},
		{
			img: "/hoodie.jpg",
			link: "/shop/hoodies",
			name: "Hoodies",
		},
		{
			img: "/mugs.jpg",
			link: "/shop/mugs",
			name: "Mugs",
		},
	];
	return (
		<>
			<div className="flex md:text-3xl text-2xl font-normal text-gray-900 justify-center text-center pt-5 relative font-poppins">
				<h1 className="m-1 relative">Product Category</h1>
				<span className="absolute md:top-16 top-14 w-24 h-1 bg-primary border rounded-xl border-transparent"></span>
			</div>

			<div className="relative flex justify-center mx-auto mt-1">
				<div className="relative flex items-center lg:container mx-2 overflow-hidden justify-center  ">
					<div className="flex justify-between absolute items-center w-full h-full">
						<button onClick={movePrev} className="hover:bg-primary bg-slate-500 hover:text-white text-black w-8 h-8 lg:w-12 lg:h-12 items-center justify-center flex rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 ml-2 transition-all ease-in-out duration-300" disabled={isDisabled("prev")}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-9 lg:h-7 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
							<span className="sr-only">Prev</span>
						</button>
						<button onClick={moveNext} className="hover:bg-primary mr-2 bg-slate-500 hover:text-white text-black w-8 h-8 lg:w-12 lg:h-12 items-center justify-center flex text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 rounded-full" disabled={isDisabled("next")}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-9 lg:h-7 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							<span className="sr-only">Next</span>
						</button>
					</div>

					<div ref={carousel} className="relative flex lg:gap-5 gap-3 lg:py-4 py-4 overflow-auto no-scrollbar scroll-smooth snap-x snap-mandatory touch-pan-x">
						{data.map((data, index) => (
							<div key={index} className="relative lg:w-32 w-24 lg:h-32 h-24 rounded-full">
								<Link href={data.link}>
									<div className="flex items-center justify-center lg:w-32 w-24 lg:h-32 h-24 bg-white rounded-full button-style">
										<img className="object-cover block" src={data.img} alt={data.name} width="128px" height="128px" />
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCarousel;
