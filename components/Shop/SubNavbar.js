import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SubNavbar = () => {
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
			<div className="flex text-4xl font-normal text-gray-900 justify-center text-center pt-5 relative">
				<h1 className="m-1 relative">Product Category</h1>
				<span className="absolute top-16 w-28 h-1 bg-primary border rounded-xl border-transparent"></span>
			</div>
			<div className="relative">
				<div className="flex justify-between absolute items-center w-full h-full ">
					<button onClick={movePrev} className="hover:bg-primary bg-slate-400 hover:text-white text-black w-12 items-center justify-center flex rounded-full h-12 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 ml-2 transition-all ease-in-out duration-300" disabled={isDisabled("prev")}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-16 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
						<span className="sr-only">Prev</span>
					</button>
					<button onClick={moveNext} className="hover:bg-primary mr-2 bg-slate-400 hover:text-white text-black w-12 items-center justify-center flex h-12 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 rounded-full" disabled={isDisabled("next")}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-16 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
						<span className="sr-only">Next</span>
					</button>
				</div>
				<div ref={carousel} className="relative px-5 flex gap-5 py-10 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
					{data.map((data, index) => (
						<div key={index} className="px-2 pt-2 pb-3 border rounded-2xl border-[#cce7d0] flex justify-center flex-col space-y-3 shadow-lg custom_shadow transition-my">
							<div className="flex border border-slate-300 rounded-2xl overflow-hidden w-32 h-32 ">
								<Link href={data.link}>
									<img className="object-cover block " src={data.img} alt={data.name} width="128px" height="128px" />
								</Link>
							</div>
							<button className="flex text-lg justify-center items-center border   transition-my border-gray-300 rounded-md mx-4 font-medium hover:text-white hover:bg-primary shadow-md py-0">
								<Link href={data.link}>{data.name}</Link>
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SubNavbar;
