import Image from "next/image";
import React from "react";
const Navbar = () => {
	return (
		<nav className="flex items-center justify-between px-5 bg-primary">
			<a href="#">
				<Image src="/logo.svg" alt="CodeBazaar" width={248} height={69} />
			</a>
			hsl(165, 60%, 40%)
			<div>
				<ul className="flex space-x-5">
					<li className="cursor-pointer">Home</li>
					<li className="cursor-pointer">About</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
