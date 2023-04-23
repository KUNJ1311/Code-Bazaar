import React from "react";
import Link from "next/link";

const SubNavbar = () => {
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
	];
	return (
		<>
			<div className="flex text-4xl font-normal text-gray-900 justify-center text-center my-5 relative">
				<h1 className="m-1">Product Category</h1>
				<span className="absolute top-12 w-28 h-1 bg-primary border rounded-xl border-transparent"></span>
			</div>
			<div className="flex flex-wrap container my-5 mx-auto justify-center items-center space-x-4">
				{data.map((data, index) => (
					<div key={index} className="px-2 pt-2 pb-3 border rounded-2xl border-[#cce7d0] flex justify-center flex-col space-y-3 shadow-lg hover:shadow-2xl transition-my">
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
		</>
	);
};

export default SubNavbar;
