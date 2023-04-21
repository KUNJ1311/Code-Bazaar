import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Typing from "@/components/Typing";

export default function Home() {
	return (
		<div className="font-spartan bg-second">
			<Head>
				<title>CodeBazaar - Wear the code</title>
				<meta name="description" content="CodeBazaar - Wear the code" />
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Navbar />
			<section id="hero" className="h-[500px] bg-[#D9DFFF] w-[100vw] flex flex-col items-start pl-16 justify-center">
				<h4 className="text-xl font-semibold pb-2">Trade-in-offer</h4>
				<h2 className="text-[46px] leading-[54px] font-semibold">Super value deals</h2>
				<h1 className="text-[50px] leading-[64px] font-semibold text-primary">
					On <Typing />
				</h1>
				<p className="text-lg font-medium text-gray-500 ">Save more with coupons & up to 70% off! </p>
				<button className="text-[18px] bg-[url('../public/button.png')] bg-transparent text-primary bg-no-repeat py-[14px] pr-20 pl-[68px] font-bold mt-4">Shop Now</button>
				<Image className="absolute right-5 z-0" src="/hero.png" width={700} height={479} alt="" priority={true}></Image>
			</section>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
						<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<circle cx="6" cy="6" r="3"></circle>
										<circle cx="6" cy="18" r="3"></circle>
										<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10  border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 border border-gray-400 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
					</div>
					<button className="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
				</div>
			</section>
			<Footer />
		</div>
	);
}
