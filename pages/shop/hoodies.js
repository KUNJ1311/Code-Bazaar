import SubNavbar from "@/components/Shop/SubNavbar";
import React from "react";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Hoodies = () => {
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
	const [current, setCurrent] = useState(0);
	const length = data.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<>
			<SubNavbar />
			hoodie
			{/* <div className="container mx-auto px-4">
				<div className="flex text-4xl font-normal text-gray-900 justify-center text-center my-5 relative">
					<h1 className="m-1">Product Category</h1>
					<span className="absolute top-12 w-28 h-1 bg-primary border rounded-xl border-transparent"></span>
				</div>
				<div className="flex container my-5 mx-auto justify-start items-center space-x-4 relative">
					{data.map((data, index) => (
						<div key={index} className={`${index === current ? "opacity-100" : "opacity-0"} absolute transition-opacity`}>
							<div className="px-2 pt-2 pb-3 border rounded-2xl border-[#cce7d0] flex justify-center flex-col space-y-3 shadow-lg hover:shadow-2xl transition-my">
								<div className="flex border border-slate-300 rounded-2xl overflow-hidden w-32 h-32 ">
									<a href={data.link}>
										<img className="object-cover block " src={data.img} alt={data.name} width="128px" height="128px" />
									</a>
								</div>
								<button className="flex text-lg justify-center items-center border   transition-my border-gray-300 rounded-md mx-4 font-medium hover:text-white hover:bg-primary shadow-md py-0">
									<a href={data.link}>{data.name}</a>
								</button>
							</div>
						</div>
					))}
					<button className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent hover:bg-gray-300 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded" onClick={prevSlide}>
						<FiChevronLeft />
					</button>
					<button className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent hover:bg-gray-300 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded" onClick={nextSlide}>
						<FiChevronRight />
					</button>
				</div>
			</div> */}
		</>
	);
};

export default Hoodies;
