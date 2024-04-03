import Typing from "./Typing";
import Link from "next/link";
const Hero = () => {
	return (
		<section id="hero" className="font-poppins h-[236px] md:h-[500px] bg-[#D9DFFF] w-full flex flex-col items-start pl-2 md:pl-16 justify-center">
			<div className="overflow-hidden flex relative w-full h-[236px] md:h-[500px] items-center">
				<div className="z-10 space-y-1 md:space-y-3">
					<h4 className="text-xl md:text-2xl font-normal md:font-medium">Trade-in-offer</h4>
					<h2 className="text-[47px] md:text-[56px] leading-[44px] md:leading-[54px] font-normal md:font-medium">Super value deals</h2>
					<h1 className="text-[50px] md:text-[60px] leading-[44px] md:leading-[64px] font-normal md:font-medium text-primary">
						On <Typing />
					</h1>
					<p className="text-lg md:text-xl font-light md:font-normal text-gray-500 pb-3">Save more with coupons & up to 70% off!</p>
					<Link href={"/shop"}>
						<button className="text-[16px] md:text-[20px] bg-[url('../public/assets/button.png')] bg-transparent text-primary bg-no-repeat py-[12px] pr-20 pl-[68px] font-medium hover:scale-110 transition-my">Shop Now</button>
					</Link>
				</div>
				<div className="right-0 absolute img_hero overflow-hidden sm:w-[250px] sm:h-[236px] md:w-[530px] md:h-[500px]">
					<img className="-z-0 right-0 absolute" src="/assets/shop.png" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
