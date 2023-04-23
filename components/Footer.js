import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="relative bg-slate-200 pt-8 pb-4">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full lg:w-6/12 px-4">
						<h4 className="text-3xl fonat-semibold text-slate-700">Let&apos;s keep in touch!</h4>
						<h5 className="text-lg mt-0 mb-2 text-slate-600">Find us on any of these platforms.</h5>
						<div className="flex space-x-2 mt-6 lg:mb-0 mb-6">
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-125 transition-my shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/instagram.svg" alt="" width={32} height={32} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-125 transition-my shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/twitter.svg" alt="" width={32} height={32} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-125 transition-my shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/facebook.svg" alt="" width={32} height={32} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-125 transition-my shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/linkedin.svg" alt="" width={32} height={32} />
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-6/12 px-4">
						<div className="flex flex-wrap items-top mb-6">
							<div className="w-full lg:w-4/12 px-4 ml-auto">
								<span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Links</span>
								<ul className="list-unstyled">
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											About Us
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Blog
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Github
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Free Products
										</Link>
									</li>
								</ul>
							</div>
							<div className="w-full lg:w-4/12 px-4">
								<span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Other Resources</span>
								<ul className="list-unstyled">
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											MIT License
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Terms &amp; Conditions
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="/">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className="mb-4 border-slate-400" />
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-slate-500 font-semibold py-1">
							Copyright © <span id="get-current-year">2023</span> Developed by
							<Link href="https://github.com/KUNJ1311" className=" hover:scale-125" target="_blank">
								<span className="text-primary font-bold"> Kunj Faladu</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
