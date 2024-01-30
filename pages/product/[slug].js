import StarRating from "@/components/Shop/StarRating";
import { addToCart, saveCart } from "@/lib/actions/cartAction";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Post = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { slug } = router.query;
	const [pin, setPin] = useState();
	const [service, setService] = useState();
	const [selectedColor, setSelectedColor] = useState("088178");
	const [selectedSize, setSelectedSize] = useState("SM");

	const checkServiceability = async () => {
		let pins = await fetch("http://localhost:3000/api/pincode");
		let pinJson = await pins.json();
		if (pinJson.includes(parseInt(pin))) {
			setService(true);
		} else {
			setService(false);
		}
	};

	const onChangePin = (e) => {
		setPin(e.target.value);
	};

	const handleColorButtonClick = (color) => {
		setSelectedColor(color);
	};

	const renderColorButtons = () => {
		const colors = ["088178", "440cde", "fff", "e3e6f3"];

		return colors.map((color, index) => <button type="button" key={index} className={`border-2 mr-2 border-gray-300 rounded-full w-7 h-7 ${selectedColor === color ? "ring-2 ring-gray-400" : ""} focus:outline-none`} style={{ background: "#" + color }} onClick={() => handleColorButtonClick(color)}></button>);
	};

	const sizeData = ["SM", "M", "L", "XL"];
	return (
		<>
			<section className="sm:py-5">
				<div className="container mx-auto px-4">
					<div className="lg:col-gap-12 xl:col-gap-16 mt-6 grid grid-cols-1 md:gap-5 sm:gap-9 gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-12">
						<div className="lg:col-span-3 lg:row-end-1">
							<div className="lg:flex lg:items-start justify-center">
								<div className="lg:order-2 lg:ml-5 justify-center flex">
									<div className="max-w-xl overflow-hidden rounded-lg">
										<img className="h-full w-full max-w-full object-cover" src="/t2.jpg" alt="" />
									</div>
								</div>

								<div className="mt-6 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
									<div className="flex flex-row items-start lg:flex-col">
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
											<img className="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img className="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img className="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
							<div className="flex flex-col border-b">
								<div className="flex flex-row">
									<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
								</div>
								<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{slug}</h1>
								<div className="flex items-center py-2">
									<div className="flex items-center justify-center h-4">
										<StarRating rating={3.5} Code={1341} />
										<div className="ml-2 flex h-4 items-center font-medium sm:text-base text-sm text-gray-500">
											<span>1,209 Reviews</span>
										</div>
									</div>
								</div>
							</div>
							<p className="leading-relaxed border-b py-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
							<div className="flex items-center mb-2">
								<span className="mt-3 text-lg font-medium text-gray-900">Colors</span>
							</div>
							{renderColorButtons()}
							<h2 className="mt-2 text-lg font-medium text-gray-900">Size</h2>
							<div className="mt-2 flex select-none flex-wrap items-center gap-1">
								{sizeData.map((item) => (
									<label key={item} className="">
										<input type="radio" name="subscription" value={item} className="peer sr-only" checked={selectedSize === item} onChange={() => setSelectedSize(item)} />
										<p className={`peer-checked:bg-primary peer-checked:text-white rounded-lg border border-black md:px-6 px-3 py-1 md:py-2 font-bold ${selectedSize === item ? "bg-primary text-white border-primary" : ""}`}>{item}</p>
									</label>
								))}
							</div>

							<div className="mt-8 flex items-center justify-between border-t border-b py-4 flex-row">
								<div className="flex items-end">
									<h1 className="sm:text-3xl text-2xl font-bold">₹6099</h1>
								</div>

								<button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-primary sm:px-8 px-3 py-3 text-center sm:text-lg text-base font-bold text-white transition-all duration-200 ease-in-out focus:outline-none hover:bg-primary-dark active:scale-95 cursor-pointer shadow-slate-400 shadow-md active:shadow">
									<svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-6 w-6" fill="none" viewBox="0 2 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
									Add to cart
								</button>
							</div>
							<div className="flex flex-col">
								<span className="text-base mt-4 mb-1">Check Availability At</span>
								<div className="flex space-x-2 text-sm">
									<input type="text" className="px-2 border-2 sm:w-[192px] w-[150px] border-gray-400 rounded-md text-base" placeholder="Enter Pincode" onChange={onChangePin} />
									<button type="button" className="flex ml-auto text-white bg-primary border-0 py-2  sm:px-6 px-4 focus:outline-none hover:bg-primary-dark rounded text-base active:scale-95 shadow-slate-400 shadow-md active:shadow" onClick={checkServiceability}>
										Check
									</button>
								</div>
								{!service && service != null && <div className="text-red-700 text-sm mt-2">Sorry! We do not deliver to this pincode yet</div>}
								{service && service != null && <div className="text-green-700 text-sm mt-2">Yay! This pincode is serviceable</div>}
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="lg:col-span-3">
							<div className="border-b border-gray-300">
								<nav className="flex gap-4">
									<a href="#" title="" className="border-b-2 border-gray-900 mt-5 pb-2 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
										{" "}
										Description{" "}
									</a>

									<a href="#" title="" className="inline-flex items-center border-b-2 border-transparent mt-5 pb-2 text-sm font-medium text-gray-600">
										Reviews
										<span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
									</a>
								</nav>
							</div>

							<div className="mt-8 flow-root sm:mt-12">
								<h1 className="text-3xl font-bold">Delivered To Your Door</h1>
								<p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
								<h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
								<p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
								<p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Post;
