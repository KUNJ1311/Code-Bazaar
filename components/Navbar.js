import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";
import Cart from "./Shop/Cart";
import { updateCart } from "@/lib/actions/cartAction";
import { useAppDispatch } from "@/lib/hooks";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
	const ref = useRef();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		try {
			const cartData = localStorage.getItem("cart");
			if (cartData) {
				dispatch(updateCart(JSON.parse(cartData)));
			}
		} catch (error) {
			console.error(error);
			localStorage.clear();
		}
	});

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
			link: "/login",
		},
	];
	const [active, setActive] = useState(0);

	const indicatorStyle = {
		transform: `translateX(${active * 56}px)`,
	};

	const getPath = () => {
		const pathname = router.pathname;
		if (pathname === "/") {
			setActive(0);
		} else if (pathname.startsWith("/shop")) {
			setActive(1);
		} else if (pathname === "/login") {
			setActive(2);
		} else {
			setActive();
		}
	};

	useEffect(() => {
		getPath();
	}, [router.pathname]);

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			setActive(3);
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			getPath();
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	const hideCart = () => {
		if (!ref.current.classList.contains("translate-x-full")) {
			getPath();
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 767);
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<nav className="z-50 sticky top-0 bg-second flex tracking-wide overflow-hidden font-poppins">
				<Link href="/">
					<img className="sm:w-[248px] sm:h-[69px] w-[200px] h-[56px]" src="/logo.svg" alt="CodeBazaar" />
				</Link>
				{!isMobile ? (
					<div className="flex space-x-8 ml-auto z-10 navbar_main">
						<ul className={`flex relative right-0 top-0 h-full w-full border-none border-gray-300 border-b-2 border-l-2 bg-secon space-x-5 text-xl items-center justify-center flex-row pt-0 pl-0 transition-my`}>
							{items.map((item, index) => (
								<Link href={`${item.link}`} key={index} className="w-full h-full justify-center flex" onClick={hideCart}>
									<li className={`nav-name flex cursor-pointer transition-my hover:text-primary space-x-2 items-center justify-center ${active === index ? "nav-active text-primary" : ""}`}>
										{item.icon}
										<span className={`nav-under before:-bottom-[4px] relative ${active === index ? "nav-active text-primary" : ""}`}>{item.name}</span>
									</li>
								</Link>
							))}
							<div type="button" onClick={toggleCart} className="flex nav-cart w-full h-full justify-center">
								<li className={`nav-name mr-5 flex cursor-pointer hover:text-primary relative transition-my space-x-2 items-center justify-center ${active === 3 ? "nav-active text-primary" : ""}`}>
									<BsCart3 className="relative text-2xl" />
									<span className={`nav-under before:-bottom-[4px] relative cart_hide ${active === 3 ? "nav-active text-primary" : ""}`}>Cart</span>
								</li>
							</div>
						</ul>
					</div>
				) : (
					<>
						{/* Mobile Nav */}
						<div className="nav-mobile bottom-2 w-full flex-1 mx-auto z-50 fixed justify-center hidden">
							<div className="w-[270px] justify-center h-14 items-center flex rounded-2xl bg-second border nav-mobile-shadow">
								<div className="flex w-56 justify-center h-14 items-center">
									<ul className="flex h-full w-64 z-1">
										{items.map((item, index) => (
											<li key={index} className={`relative flex list-none w-14 h-14 z-1 justify-center items-center ${active === index ? "nav-mobile-active" : ""}`} onClick={hideCart}>
												<Link className="relative flex justify-center items-center flex-col text-center font-medium" href={item.link}>
													<span className="mobile-icon relative text-[1.5em] text-center block z-20">{item.icon}</span>
													<span className="mobile-text absolute font-normal text-sm z-20">{item.name}</span>
												</Link>
											</li>
										))}
										<li className={`relative flex list-none w-14 h-14 z-1 justify-center items-center ${active === 3 ? "nav-mobile-active" : ""}`} onClick={toggleCart}>
											<button type="button" className="relative flex justify-center items-center flex-col text-center font-medium">
												<span className="mobile-icon relative text-[1.5em] text-center block z-20">
													<BsCart3 className="relative text-2xl" />
												</span>
												<span className="mobile-text absolute font-normal text-sm z-20">Cart</span>
											</button>
										</li>
										{active >= 0 ? <div className="nav-indicator absolute w-14 h-14 bg-second -top-1/2 rounded-full -z-1" style={indicatorStyle}></div> : ""}
									</ul>
								</div>
							</div>
						</div>
					</>
				)}
				{/* Cart */}
				<div className="relative sm:top-[69px] top-[56px] right-0 z-0 sm:pt-[-69px] pt-[-56px]">
					<div ref={ref} className="transition translate-x-full pointer-events-none fixed right-0 flex sm:max-h-[calc(100%-69px)] max-h-[calc(100%-56px)] max-w-full ">
						<Cart toggleCart={toggleCart} />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
