import StarRating from "@/components/Shop/StarRating";
import { addToCart, saveCart } from "@/lib/actions/cartAction";
import { useAppDispatch } from "@/lib/hooks";
import Product from "@/models/Product";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Post = (props) => {
	const { product, variants } = props;
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [pin, setPin] = useState();
	const [service, setService] = useState();
	const [selectedColor, setSelectedColor] = useState("");
	const [selectedSize, setSelectedSize] = useState("");
	const checkServiceability = async () => {
		let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
		let pinJson = await pins.json();
		if (Object.keys(pinJson).includes(pin)) {
			toast.success(<span className="text-gray-900 lg:text-base text-sm font-medium">Yay! This PIN Code is serviceable</span>);
			setService(true);
		} else {
			toast.error(<span className="text-gray-900 lg:text-base text-sm font-medium">Sorry! We do not deliver to this PIN Code yet</span>);
			setService(false);
		}
	};

	const onChangePin = (e) => {
		setPin(e.target.value);
	};

	useEffect(() => {
		setSelectedColor(product.color);
		setSelectedSize(product.size);
	}, [product]);

	const handleColorButtonClick = (color) => {
		setSelectedColor(color);
		const defaultSize = Object.keys(variants[color]?.size || {})[0];
		setSelectedSize(defaultSize);
		updateData(color, defaultSize);
	};

	const handleSizeChange = (size) => {
		setSelectedSize(size);
		if (selectedColor) {
			updateData(selectedColor, size);
		}
	};

	const updateData = (color, size) => {
		const selectedVariant = variants[color]?.size[size];
		if (selectedVariant) {
			router.push({ pathname: router.pathname, query: { ...router.query, slug: selectedVariant.slug } });
		}
	};

	const renderColorButtons = () => {
		const colors = Object.keys(variants);
		return colors.map((color, index) => <button type="button" key={index} className={`border-2 mr-2 border-gray-300 rounded-full w-7 h-7 ${selectedColor === color ? "ring-2 ring-gray-400" : ""} focus:outline-none`} style={{ background: variants[color].colorCode }} onClick={(e) => handleColorButtonClick(color, e)}></button>);
	};

	const renderSizeButtons = () => {
		const sizesForColor = variants[selectedColor]?.size || {};
		const sizes = Object.keys(sizesForColor);

		return sizes.map((size) => (
			<label key={size}>
				<input type="radio" name="size" value={size} className="peer sr-only cursor-pointer" checked={selectedSize === size} onChange={() => handleSizeChange(size)} />
				<p className={`peer-checked:bg-primary cursor-pointer peer-checked:text-white rounded-xl border border-black md:px-5 px-3 py-1 md:py-2 font-semibold text-lg ${selectedSize === size ? "bg-primary text-white border-primary" : ""}`}>{size}</p>
			</label>
		));
	};

	return (
		<>
			<section className="sm:py-5 font-poppins">
				<div className="container mx-auto px-4">
					<div className="lg:col-gap-12 xl:col-gap-16 mt-6 grid grid-cols-1 md:gap-5 sm:gap-9 gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-12">
						<div className="lg:col-span-3 lg:row-end-1">
							<div className="lg:flex lg:items-start justify-center">
								<div className="lg:order-2 lg:ml-5 justify-center flex">
									<div className="max-w-md overflow-hidden rounded-lg">
										<img className="h-full w-full max-w-full object-cover" src={product.img} alt={product.title} />
									</div>
								</div>
								<div className="mt-6 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
									<div className="flex flex-row items-start lg:flex-col">
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
											<img className="h-full w-full object-cover" src="/assets/t2.jpg" alt="" />
										</button>
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img className="h-full w-full object-cover" src="/assets/t2.jpg" alt="" />
										</button>
										<button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
											<img className="h-full w-full object-cover" src="/assets/t2.jpg" alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:col-span-4 lg:row-span-2 lg:row-end-2">
							<div className="flex flex-col border-b">
								<div className="flex flex-row">
									<h2 className="title-font text-gray-500 tracking-widest lg:text-base md:text-sm text-xs font-semibold">BRAND NAME</h2>
								</div>
								<h1 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl lg:text-2xl">
									{product.title} ({product.size}/{product.color.charAt(0).toUpperCase() + product.color.slice(1)})
								</h1>
								<div className="flex items-center py-2">
									<div className="flex items-center justify-start h-4 flex-wrap">
										<StarRating rating={parseFloat(product.rating).toFixed(1)} Code={product.slug} />
										<div className="ml-2 flex h-4 items-center font-medium text-sm md:text-base text-gray-500">
											<span>1,209 Reviews</span>
										</div>
									</div>
								</div>
							</div>
							<p className="leading-relaxed lg:text-lg md:base text-sm border-b py-4">{product.desc}</p>
							<div className="flex items-center mb-2">
								<span className="mt-3 md:lg text-base font-medium text-gray-900">Colors</span>
							</div>
							{renderColorButtons()}
							<h2 className="mt-2 md:lg text-base font-medium text-gray-900">Size</h2>
							<div className="mt-2 flex select-none flex-wrap items-center gap-1">{renderSizeButtons()}</div>
							<div className="mt-8 flex items-center justify-between border-t border-b py-4 flex-row">
								<div className="flex items-end">
									<h1 className="lg:text-3xl md:text-2xl text-xl font-bold ">₹6099</h1>
								</div>
								<button
									type="button"
									className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-primary sm:px-8 px-3 sm:py-3 py-2 text-center md:text-lg sm:text-base text-sm font-medium text-white transition-all duration-200 ease-in-out focus:outline-none hover:bg-primary-dark active:scale-95 cursor-pointer shadow-slate-400 shadow-md active:shadow"
									onClick={() => {
										dispatch(addToCart(product.slug, 1, product.price, product.title, product.size, product.color, product.img));
										dispatch(saveCart());
										toast.success(
											<>
												<div>
													<p className="font-semibold">Product Added Successfully</p>
													<p className="text-xs text-gray-900 lg:text-sm font-medium line-clamp-1">{product.title}</p>
												</div>
											</>,
											{ autoClose: 4000 }
										);
									}}
								>
									Add to cart
								</button>
							</div>
							<div className="flex flex-col">
								<span className="text-xs sm:text-sm md:text-base mt-4 mb-1">Check Availability At</span>
								<div className="flex space-x-2 text-sm">
									<div className="flex relative">
										<input type="text" className="px-2 border-2 min-[350px]:w-[192px] w-full border-gray-400 rounded-md text-xs sm:text-sm md:text-base" placeholder="Enter PIN Code" onChange={onChangePin} />
										<div className="h-full flex absolute right-2">
											{service && service != null && (
												<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
													<circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
													<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
												</svg>
											)}
										</div>
									</div>
									<button type="button" className="flex ml-auto text-white bg-primary border-0 py-2 sm:px-6 px-4 focus:outline-none hover:bg-primary-dark rounded text-xs sm:text-sm md:text-base active:scale-95 shadow-slate-400 shadow-md active:shadow" onClick={checkServiceability}>
										Check
									</button>
								</div>
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

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let product = await Product.findOne({ slug: context.query.slug });
	let variants = await Product.find({ title: product.title });
	let colorSizeSlug = {};

	for (let item of variants) {
		if (!colorSizeSlug[item.color]) {
			colorSizeSlug[item.color] = { size: {}, colorCode: item.colorCode };
		}

		colorSizeSlug[item.color].size[item.size] = { slug: item.slug };
	}
	return {
		props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) },
	};
}

export default Post;
