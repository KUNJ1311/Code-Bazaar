import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";
import Cart from "./Shop/Cart";
import { updateCart } from "@/lib/actions/cartAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { BsCart3, BsPersonLock } from "react-icons/bs";
import { addUserData } from "@/lib/actions/userAction";

const Navbar = () => {
	const ref = useRef();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { totalQty } = useAppSelector((state) => state.cart);
	const userData = useAppSelector((state) => state.user);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		try {
			const cartData = localStorage.getItem("cart");
			if (cartData) {
				dispatch(updateCart(JSON.parse(cartData)));
			} else {
				localStorage.removeItem("cart");
			}

			const token = localStorage.getItem("token");
			if (token) {
				dispatch(addUserData(JSON.parse(token)));
			} else {
				localStorage.removeItem("token");
			}
		} catch (error) {
			console.error(error);
			localStorage.clear();
		}
	}, [dispatch]);

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
		} else if (pathname === "/account" || pathname === "/login" || pathname === "/signup") {
			setActive(3);
		} else {
			setActive();
		}
	};

	useEffect(() => {
		getPath();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.pathname]);

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			setActive(2);
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
			<nav key={userData.key} className="z-50 sm:h-[69px] h-[56px] sticky top-0 bg-second flex tracking-wide font-poppins">
				<Link href="/">
					<img className="sm:w-[248px] sm:h-[69px] w-[200px] h-[56px]" src="/assets/logo.svg" alt="CodeBazaar" />
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
								<li className={`nav-name flex cursor-pointer hover:text-primary relative transition-my space-x-2 items-center justify-center ${active === 2 ? "nav-active text-primary" : ""}`}>
									<div className="absolute z-20 left-5 top-3 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-dark rounded-full">{totalQty}</div>
									<BsCart3 className="relative text-2xl" />
									<span className={`nav-under before:-bottom-[4px] relative cart_hide ${active === 2 ? "nav-active text-primary" : ""}`}>Cart</span>
								</li>
							</div>
							{userData.token ? (
								<Link href="/account" key={3} className="w-full h-full justify-center flex pr-5 " onClick={hideCart}>
									<li className={`nav-name flex cursor-pointer transition-my hover:text-primary space-x-2 items-center justify-center ${active === 3 ? "nav-active text-primary" : ""}`}>
										<HiOutlineUser className="relative text-2xl" />
										<span className={`nav-under before:-bottom-[4px] relative ${active === 3 ? "nav-active text-primary" : ""}`}>Account</span>
									</li>
								</Link>
							) : (
								<Link href="/login" key={3} className="w-full h-full justify-center flex pr-5 " onClick={hideCart}>
									<li className={`nav-name flex cursor-pointer transition-my hover:text-primary space-x-2 items-center justify-center ${active === 3 ? "nav-active text-primary" : ""}`}>
										<BsPersonLock className="relative text-2xl" />
										<span className={`nav-under before:-bottom-[4px] relative ${active === 3 ? "nav-active text-primary" : ""}`}>Login</span>
									</li>
								</Link>
							)}
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
													<span className="mobile-text absolute font-normal text-xs z-20">{item.name}</span>
												</Link>
											</li>
										))}
										<li key={2} className={`relative flex list-none w-14 h-14 z-1 justify-center items-center ${active === 2 ? "nav-mobile-active top-1 " : ""}`} onClick={toggleCart}>
											<button type="button" className="relative flex justify-center items-center flex-col text-center font-medium">
												<span className="mobile-icon relative text-[1.5em] text-center block z-20">
													<div className="absolute z-20 left-3 -top-2 inline-flex items-center justify-center w-[17px] h-[17px] text-[10px] font-bold text-white bg-primary-dark rounded-full">{totalQty}</div>
													<BsCart3 className="relative text-2xl" />
												</span>
												<span className="mobile-text absolute font-normal text-xs z-20">Cart</span>
											</button>
										</li>
										{userData.token ? (
											<li key={3} className={`relative flex list-none w-14 h-14 z-1 justify-center items-center  ${active === 3 ? "nav-mobile-active" : ""}`} onClick={hideCart}>
												<Link className="relative flex justify-center items-center flex-col text-center font-medium" href="/account">
													<span className="mobile-icon relative text-[1.5em] text-center block z-20">
														<HiOutlineUser className="relative text-2xl" />
													</span>
													<span className="mobile-text absolute font-normal text-xs z-20">Account</span>
												</Link>
											</li>
										) : (
											<li key={3} className={`relative flex list-none w-14 h-14 z-1 justify-center items-center ${active === 3 ? "nav-mobile-active" : ""}`} onClick={hideCart}>
												<Link className="relative flex justify-center items-center flex-col text-center font-medium" href="/login">
													<span className="mobile-icon relative text-[1.5em] text-center block z-20">
														<BsPersonLock className="relative text-2xl" />
													</span>
													<span className="mobile-text absolute font-normal text-xs z-20">Login</span>
												</Link>
											</li>
										)}
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
