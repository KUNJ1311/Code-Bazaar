import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
	return (
		<nav className="flex items-center flex-col md:flex-row justify-center md:justify-between px-5 bg-second text-lg md:text-xl">
			<Link href="#">
				<Image src="/logo.svg" alt="CodeBazaar" width={248} height={69} priority={true} />
			</Link>
			<div className="md:mr-14">
				<ul className="flex space-x-5 font-medium">
					<Link href={"/"}>
						<li className="cursor-pointer">T-Shirts</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer">Hoodies</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer">Stickers</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer">Mugs</li>
					</Link>
				</ul>
			</div>
			<div className="absolute right-0 mx-6 text-2xl cursor-pointer">
				<BsCart3 />
			</div>
		</nav>
	);
};

export default Navbar;
