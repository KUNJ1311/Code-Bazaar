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

	useEffect(() => {
		const pathname = router.pathname;
		if (pathname === "/") {
			setActive(0);
		} else if (pathname.startsWith("/shop")) {
			setActive(1);
		} else if (pathname === "/account") {
			setActive(2);
		} else if (pathname === "/cart") {
			setActive(3);
		}
	}, [router.pathname]);

	return (
		<nav className="z-50 sticky top-0 flex items-center flex-col md:flex-row justify-center md:justify-between px-5 bg-second text-lg md:text-xl shadow-md tracking-wide ">
			<Link href="/">
				<Image src="/logo.svg" alt="CodeBazaar" width={248} height={69} priority={true} />
			</Link>
			<div className="flex space-x-8">
				<ul className="flex space-x-8 text-xl">
					{items.map((item, index) => (
						<Link href={`${item.link}`} key={index}>
							<li className={`flex cursor-pointer hover:text-primary nav-under relative transition-my space-x-2 items-center justify-center ${active === index ? "nav-active text-primary" : ""}`}>
								{item.icon}
								<span>{item.name}</span>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
