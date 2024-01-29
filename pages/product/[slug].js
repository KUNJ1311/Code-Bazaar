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

	return (
		<>
			<section class="py-12 sm:py-16">
				<div class="container mx-auto px-4">
					<div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
						<div class="lg:col-span-3 lg:row-end-1">
							<div class="lg:flex lg:items-start">
								<div class="lg:order-2 lg:ml-5">
									<div class="max-w-xl overflow-hidden rounded-lg">
										<img class="h-full w-full max-w-full object-cover" src="/t2.jpg" alt="" />
									</div>
								</div>

								<div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
									<div class="flex flex-row items-start lg:flex-col">
										<button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
											<img class="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
										<button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img class="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
										<button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img class="h-full w-full object-cover" src="/t2.jpg" alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>

						<div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
							<h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{slug}</h1>

							<div class="mt-5 flex items-center">
								<div class="flex items-center">
									<StarRating rating={3.5} Code={1341} />
								</div>
								<p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
							</div>

							<h2 class="mt-8 text-base text-gray-900">Variant</h2>

							<h2 class="mt-8 text-base text-gray-900">Choose subscription</h2>
							<div class="mt-3 flex select-none flex-wrap items-center gap-1">
								<label class="">
									<input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
									<p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
									<span class="mt-1 block text-center text-xs">$80/mo</span>
								</label>
								<label class="">
									<input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
									<p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
									<span class="mt-1 block text-center text-xs">$60/mo</span>
								</label>
								<label class="">
									<input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
									<p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
									<span class="mt-1 block text-center text-xs">$40/mo</span>
								</label>
							</div>

							<div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
								<div class="flex items-end">
									<h1 class="text-3xl font-bold">$60.50</h1>
									<span class="text-base">/month</span>
								</div>

								<button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
									<svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
									Add to cart
								</button>
							</div>

							<ul class="mt-8 space-y-2">
								<li class="flex items-center text-left text-sm font-medium text-gray-600">
									<svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
									</svg>
									Free shipping worldwide
								</li>

								<li class="flex items-center text-left text-sm font-medium text-gray-600">
									<svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
									</svg>
									Cancel Anytime
								</li>
							</ul>
						</div>

						<div class="lg:col-span-3">
							<div class="border-b border-gray-300">
								<nav class="flex gap-4">
									<a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
										{" "}
										Description{" "}
									</a>

									<a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
										Reviews
										<span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
									</a>
								</nav>
							</div>

							<div class="mt-8 flow-root sm:mt-12">
								<h1 class="text-3xl font-bold">Delivered To Your Door</h1>
								<p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
								<h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
								<p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
								<p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 md:py-14 py-7 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/t4.jpg" />
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
							<h1 className="text-gray-900 lg:text-3xl text-2xl title-font font-medium mb-1">{slug}</h1>
							<div className="flex mb-4">
								<span className="flex items-center">
									<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<span className="text-gray-600 ml-3">4 Reviews</span>
								</span>
								<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
									<a className="text-gray-500">
										<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="text-gray-500">
										<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="text-gray-500">
										<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
							<p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
								<div className="flex">
									<span className="mr-3">Color</span>
									<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-primary rounded-full w-6 h-6 focus:outline-none"></button>
								</div>
								<div className="flex ml-6 items-center">
									<span className="mr-3">Size</span>
									<div className="relative">
										<select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-pritext-primary text-base pl-3 pr-10">
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
											<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
												<path d="M6 9l6 6 6-6"></path>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="flex">
								<span className="title-font font-medium text-2xl text-gray-900 flex items-center">$58.00</span>
								<div className="flex sm:space-x-5 space-x-2 ml-auto">
									<button className="flex text-white bg-primary border-0 py-2 sm:px-6 px-4 focus:outline-none hover:bg-primary-dark rounded text-sm sm:text-base">Buy Now</button>
									<button
										className="flex text-white bg-primary border-0 py-2 sm:px-6 px-4 focus:outline-none hover:bg-primary-dark rounded text-sm sm:text-base"
										onClick={() => {
											dispatch(addToCart(slug, 1, 199, "hove gove", 2, "Gray"));
											dispatch(saveCart());
										}}
									>
										Add to Cart
									</button>
								</div>
							</div>
							<div className="flex flex-col">
								<span className="text-lg mt-4 mb-1">Check Availability At</span>
								<div className="flex space-x-2 text-sm">
									<input type="text" className="px-2 border-2 border-gray-400 rounded-md text-base" placeholder="Enter Pincode" onChange={onChangePin} />
									<button type="button" className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded text-base" onClick={checkServiceability}>
										Check
									</button>
								</div>
								{!service && service != null && <div className="text-red-700 text-sm mt-2">Sorry! We do not deliver to this pincode yet</div>}
								{service && service != null && <div className="text-green-700 text-sm mt-2">Yay! This pincode is serviceable</div>}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Post;
