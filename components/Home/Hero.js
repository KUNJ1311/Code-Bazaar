import React from "react";
import Typing from "./Typing";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
	return (
		<section id="hero" className="h-[500px] bg-[#D9DFFF] w-full flex flex-col items-start pl-16 justify-center">
			<div className="z-10 space-y-3">
				<h4 className="text-2xl font-semibold">Trade-in-offer</h4>
				<h2 className="text-[56px] leading-[54px] font-semibold">Super value deals</h2>
				<h1 className="text-[60px] leading-[64px] font-semibold text-primary">
					On <Typing />
				</h1>
				<p className="text-xl font-medium text-gray-500 pb-3">Save more with coupons & up to 70% off!</p>
				<Link href={"/shop"}>
					<button className="text-[20px] bg-[url('../public/button.png')] bg-transparent text-primary bg-no-repeat py-[12px] pr-20 pl-[68px] font-semibold hover:scale-110 transition-my">Shop Now</button>
				</Link>
			</div>
			<Image className="absolute right-0 -z-0" src="/shop.png" width={530} height={500} alt="" priority={true}></Image>
		</section>
	);
};

export default Hero;
