import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";

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
		{
			icon: <BsCart3 className="relative text-2xl" />,
			name: "Cart",
			link: "/cart",
		},
	];
	const [active, setActive] = useState(0);
	const cartIndex = 3;
	useEffect(() => {
		const pathname = router.pathname;
		if (pathname === "/") {
			setActive(0);
		} else if (pathname.startsWith("/shop")) {
			setActive(1);
		} else if (pathname === "/account") {
			setActive(2);
		} else if (pathname === "/cart") {
			setActive(cartIndex);
			setActive(3);
		}
	}, [router.pathname, cartIndex]);

	const [visible, setVisible] = useState(false);
	const handleMenuclick = () => {
		setVisible(!visible);
	};
	return (
		<nav className="z-50 sticky top-0 bg-second flex shadow-md tracking-wide overflow-hidden">
			<Link href="/">
				<img className="sm:w-[248px] sm:h-[69px] w-[200px] h-[56]" src="/logo.svg" alt="CodeBazaar" />
			</Link>
			<div className="flex space-x-8 ml-auto">
				<ul className={`flex md:relative fixed ${visible ? "right-0" : "right-[-320px]"} md:h-full md:w-full w-80 h-[100vh] md:bg-none bg-[#e3e6f3] md:space-x-8 text-lg md:items-center items-start md:justify-center md:flex-row flex-col md:text-xl z-50 md:pt-0 md:pl-0 pt-20 pl-3 navbar_main transition-my`}>
					{items.map((item, index) => (
						<Link href={`${item.link}`} key={index}>
							<li className={`flex li_m cursor-pointer hover:text-primary nav-under relative transition-my space-x-2 items-center justify-center ${active === index ? "nav-active text-primary" : ""}`}>
								{item.icon}
								<span>{item.name}</span>
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="flex md:hidden mr-3">
				<div className="flex z-0 pl-8">
					<ul className="flex text-lg items-center pr-5 md:text-xl">
						<Link href="/cart" key={cartIndex}>
							<li className={`flex cursor-pointer hover:text-primary nav-under relative transition-my space-x-2 items-center justify-center ${active === cartIndex ? "nav-active text-primary" : ""}`}>
								<BsCart3 className="relative text-2xl" />
								<span>Cart</span>
							</li>
						</Link>
					</ul>
				</div>
				<button onClick={handleMenuclick} className="mx-2 z-50 flex items-center">
					<div style={{ width: "24px", height: "18px", position: "relative", transform: "rotate(0deg)" }}>
						<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 0px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(45deg)", marginTop: "-1px" }}></span>
						<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", right: visible ? "-80px" : "0px", marginTop: "8px" }}></span>
						<span className="transition-my" style={{ display: "block", height: "2px", width: "100%", background: "#088178", borderRadius: "1px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 18px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(-45deg)", marginTop: "-1px" }}></span>
					</div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
