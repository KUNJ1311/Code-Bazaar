import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";
import Cart from "./Shop/Cart";

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

	return (
		<>
			<nav className="z-50 sticky top-0 bg-second flex tracking-wide overflow-hidden">
				<Link href="/">
					<img className="sm:w-[248px] sm:h-[69px] w-[200px] h-[56px]" src="/logo.svg" alt="CodeBazaar" />
				</Link>
				<div className="flex space-x-8 ml-auto z-10">
					<ul className={`flex md:relative fixed  ${visible ? "right-0" : "-right-52 md:right-0 md:pr-5 "} md:top-0 sm:top-[69px] top-[56px] md:h-full md:w-full w-[150px] h-44 md:border-none  border-gray-300 border-b-2 border-l-2 md:bg-second bg-white md:space-x-5 text-lg md:items-center items-start md:justify-center md:flex-row flex-col md:text-xl md:pt-0 md:pl-0 pt-4 md:rounded-none rounded-bl-2xl pl-5 navbar_main transition-my`}>
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
				<Cart />

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
		</>
	);
};

export default Navbar;
