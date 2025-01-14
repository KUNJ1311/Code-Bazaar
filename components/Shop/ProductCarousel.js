import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
			img: "/assets/tshirts.jpg",
			link: "/shop/tshirts?page=1",
			name: "T-Shirts",
		},
		{
			img: "/assets/hoodie.jpg",
			link: "/shop/hoodies?page=1",
			name: "Hoodies",
		},
		{
			img: "/assets/mugs.jpg",
			link: "/shop/mugs?page=1",
			name: "Mugs",
		},
	];
	return (
		<>
			{/* <div className="flex md:text-3xl text-xl font-normal text-gray-900 justify-center text-center pt-5 relative">
				<h1 className="m-1 relative">Product Category</h1>
				<span className="absolute md:top-16 top-14 w-24 h-1 bg-primary border rounded-xl border-transparent"></span>
			</div> */}

			<div className="relative flex justify-center mx-auto mt-1 w-full">
				<div className="relative flex items-center lg:container overflow-hidden justify-center w-full md:px-8 px-0">
					<div className="md:flex hidden justify-between absolute items-center w-full h-full">
						<button onClick={movePrev} className="hover:bg-primary bg-slate-300 hover:text-white text-black w-8 h-full items-center justify-center flex rounded-md text-center opacity-75 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed z-10 p-0 m-0  transition-all ease-in-out duration-300" disabled={isDisabled("prev")}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-9 lg:h-7 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
							<span className="sr-only">Prev</span>
						</button>
						<button onClick={moveNext} className="hover:bg-primary  bg-slate-300 hover:text-white text-black w-8 h-full items-center justify-center flex text-center opacity-75 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 rounded-md" disabled={isDisabled("next")}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-9 lg:h-7 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
							<span className="sr-only">Next</span>
						</button>
					</div>

					<div ref={carousel} className="relative flex lg:gap-5 gap-3 px-2 lg:py-4 py-4 overflow-auto no-scrollbar scroll-smooth snap-x snap-mandatory touch-pan-x">
						{data.map((data, index) => (
							<div key={index} className="relative lg:w-32 w-24 lg:h-32 h-24 rounded-full">
								<Link href={data.link}>
									<div className="flex items-center justify-center lg:w-32 w-24 lg:h-32 h-24 bg-white rounded-full button-style">
										<Image className="object-cover block" src={data.img} alt={data.name} width={128} height={128} />
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
