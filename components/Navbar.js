import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
	return (
		<nav className="flex items-center flex-col md:flex-row justify-center md:justify-between px-5 bg-second text-lg md:text-xl shadow-md tracking-wide">
			<Link href="#">
				<Image src="/logo.svg" alt="CodeBazaar" width={248} height={69} priority={true} />
			</Link>
			<div className="md:mr-14">
				<ul className="flex space-x-8 font-medium">
					<Link href={"/"}>
						<li className="cursor-pointer hover:text-primary nav-under relative transition-my">Home</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer hover:text-primary nav-under relative transition-my">Tshirts</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer hover:text-primary nav-under relative transition-my">Hoodies</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer hover:text-primary nav-under relative transition-my">Stickers</li>
					</Link>
					<Link href={"/"}>
						<li className="cursor-pointer hover:text-primary nav-under relative transition-my">Mugs</li>
					</Link>
				</ul>
			</div>
			<div className="absolute right-0 mx-6 text-2xl cursor-pointer hover:text-primary transition-my">
				<BsCart3 />
			</div>
		</nav>
	);
};

export default Navbar;
