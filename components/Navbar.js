import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
	const router = useRouter();
	const items = [
		{
			icon: <HiOutlineHome className="relative text-2xl" />,
			name: "Home",
			link: "/",
		},
		{
			icon: <HiOutlineShoppingBag className="relative text-2xl" />,
			name: "Shop",
			link: "/shop",
		},
		{
			icon: <HiOutlineUser className="relative text-2xl" />,
			name: "Account",
			link: "/account",
		},
	];
	const [active, setActive] = useState(0);
	useEffect(() => {
		const pathname = router.pathname;
		if (pathname === "/") {
			setActive(0);
		} else if (pathname.startsWith("/shop")) {
			setActive(1);
		} else if (pathname === "/account") {
			setActive(2);
		}
	}, [router.pathname]);

	const [visible, setVisible] = useState(false);
	const handleMenuclick = () => {
		setVisible(!visible);
	};
	const handleLinkClick = () => {
		setVisible(false);
	};
	const products = [
		{
			id: 1,
			name: "Throwback Hip Bag",
			href: "#",
			color: "Salmon",
			price: "$90.00",
			quantity: 1,
			imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
			imageAlt: "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
		},
		{
			id: 2,
			name: "Medium Stuff Satchel",
			href: "#",
			color: "Blue",
			price: "$32.00",
			quantity: 1,
			imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
			imageAlt: "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		},

		// More products...
	];
	const ref = useRef();
	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};
	return (
		<>
			<nav className="z-50 sticky top-0 bg-second flex shadow-md tracking-wide overflow-hidden">
				<Link href="/">
					<img className="sm:w-[248px] sm:h-[69px] w-[200px] h-[56px]" src="/logo.svg" alt="CodeBazaar" />
				</Link>
				<div className="flex space-x-8 ml-auto">
					<ul className={`flex md:relative fixed ${visible ? "right-0" : "-right-52 md:right-0 md:pr-5 "} md:top-0 sm:top-[69px] top-[56px] md:h-full md:w-full w-[150px] h-44 md:border-none  border-gray-300 border-b-2 border-l-2 md:bg-second bg-white md:space-x-5 text-lg md:items-center items-start md:justify-center md:flex-row flex-col md:text-xl md:pt-0 md:pl-0 pt-4 md:rounded-none rounded-bl-2xl pl-5 navbar_main transition-my`}>
						{items.map((item, index) => (
							<Link href={`${item.link}`} key={index} onClick={handleLinkClick} className="w-full h-full jmd:ustify-center items-center flex">
								<li className={`flex li_m cursor-pointer hover:text-primary nav-under relative transition-my space-x-2  items-center justify-center ${active === index ? "nav-active text-primary" : ""}`}>
									{item.icon}
									<span>{item.name}</span>
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div type="button" onClick={toggleCart} className="flex z-0">
					<ul className="flex text-lg items-center pr-5 md:text-xl">
						<li className={`flex cursor-pointer hover:text-primary nav-under relative transition-my space-x-2 items-center justify-center `}>
							<BsCart3 className="relative text-2xl" />
							<span className="cart_hide">Cart</span>
						</li>
					</ul>
				</div>
				<div className="flex md:hidden mr-3 z-50">
					<button onClick={handleMenuclick} className="mx-2 z-40 flex items-center">
						<div style={{ width: "24px", height: "18px", position: "relative", transform: "rotate(0deg)" }}>
							<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 0px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(-45deg)", marginTop: "-1px" }}></span>
							<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", right: visible ? "-80px" : "0px", marginTop: "8px" }}></span>
							<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 18px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(45deg)", marginTop: "-1px" }}></span>
						</div>
					</button>
				</div>
			</nav>
			<div className="relative sm:top-[69px] top-[56px] right-0  z-20">
				<div className="pointer-events-none fixed sm:top-[69px] top-[56px] right-0 flex max-h-full max-w-full overflow-y-auto overflow-x-hidden ">
					<div ref={ref} className="transition translate-x-full ">
						<div className="pointer-events-auto w-screen max-w-md">
							<div className="flex h-full flex-col">
								<div className="flex-1 md:rounded-bl-2xl px-4 py-6 sm:px-6 md:pl-6 lg:pl-10 border-gray-300 border-b-2 border-l-2 bg-white">
									<div className="flex items-start justify-between">
										<div className="text-lg font-medium text-gray-900">Shopping cart</div>
										<div className="ml-3 flex h-7 items-center">
											<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={toggleCart}>
												<span className="absolute -inset-0.5" />
												<span className="sr-only">Close panel</span>
												<IoClose className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</div>

									<div className="mt-8">
										<div className="flow-root">
											<ul role="list" className="-my-6 divide-y divide-gray-200">
												{products.map((product) => (
													<li key={product.id} className="flex py-6">
														<div className="h-16 w-16 md:h-24 md:w-24 lg:w-32 lg:h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
															<img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
														</div>

														<div className="ml-4 flex flex-1 flex-col">
															<div>
																<div className="flex justify-between text-sm md:text-base font-medium text-gray-900">
																	<h3>
																		<a href={product.href}>{product.name}</a>
																	</h3>
																	<p className="ml-4">{product.price}</p>
																</div>
																<p className="mt-1 text-xs md:text-sm text-gray-500">{product.color}</p>
															</div>
															<div className="flex flex-1 items-end justify-between text-xs md:text-sm">
																<p className="text-gray-500">Qty {product.quantity}</p>
																<div className="flex">
																	<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-red-500">
																		Remove
																	</button>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
										<div className="flex justify-between text-xs md:text-sm font-medium text-gray-900">
											<p>Subtotal</p>
											<p>$262.00</p>
										</div>
										<p className="mt-0.5 text-xs md:text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
										<div className="mt-6">
											<a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs md:text-base font-medium text-white shadow-sm hover:bg-[#045f59]">
												Checkout
											</a>
										</div>
										<div className="mt-6 flex justify-center text-center text-xs md:text-sm text-gray-500">
											<p>
												or{" "}
												<button type="button" className="text-xs md:text-sm font-medium text-primary hover:text-indigo-500" onClick={toggleCart}>
													Continue Shopping
													<span aria-hidden="true"> &rarr;</span>
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
