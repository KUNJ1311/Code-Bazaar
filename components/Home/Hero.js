import React from "react";
import Typing from "./Typing";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
	return (
		<section id="hero" className="h-[236px] md:h-[500px] bg-[#D9DFFF] w-full flex flex-col items-start pl-2 md:pl-16 justify-center overflow-hidden">
			<div className="z-10 space-y-1 md:space-y-3">
				<h4 className="text-xl md:text-2xl font-medium md:font-semibold">Trade-in-offer</h4>
				<h2 className="text-[47px] md:text-[56px] leading-[44px] md:leading-[54px] font-medium md:font-semibold">Super value deals</h2>
				<h1 className="text-[50px] md:text-[60px] leading-[44px] md:leading-[64px] font-medium md:font-semibold text-primary">
					On <Typing />
				</h1>
				<p className="text-lg md:text-xl font-normal md:font-medium text-gray-500 pb-3">Save more with coupons & up to 70% off!</p>
				<Link href={"/shop"}>
					<button className="text-[16px] md:text-[20px] bg-[url('../public/button.png')] bg-transparent text-primary bg-no-repeat py-[12px] pr-20 pl-[68px] font-semibold hover:scale-110 transition-my">Shop Now</button>
				</Link>
			</div>
			<div className="right-0 absolute img_hero overflow-hidden sm:w-[250px] sm:h-[236px] md:w-[530px] md:h-[500px]">
				<img className="-z-0 right-0 absolute " src="/shop.png" alt="" />
			</div>
		</section>
	);
};

export default Hero;
