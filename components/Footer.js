import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="relative bg-second pt-8 main-footer flex items-end">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full lg:w-6/12 px-4">
						<h4 className="lg:text-3xl md:text-2xl text-xl fonat-semibold text-slate-700">Let&apos;s keep in touch!</h4>
						<h5 className="lg:text-lg md:text-base text-sm mt-0 mb-2 text-slate-600">Find us on any of these platforms.</h5>
						<div className="flex space-x-2 mt-6 lg:mb-0 mb-6 flex-wrap">
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-110 transition-my font-normal shadow-slate-400 shadow-md h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/assets/instagram.svg" alt="" width={27} height={27} priority={false} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-110 transition-my font-normal shadow-slate-400 shadow-md h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/assets/twitter.svg" alt="" width={27} height={27} priority={false} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-110 transition-my font-normal shadow-slate-400 shadow-md h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/assets/facebook.svg" alt="" width={27} height={27} priority={false} />
								</button>
							</Link>
							<Link href={"/"}>
								<button className="flex bg-white border border-slate-200 hover:scale-110 transition-my font-normal shadow-slate-400 shadow-md h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
									<Image src="/assets/linkedin.svg" alt="" width={27} height={27} priority={false} />
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
				<hr className=" border-slate-400" />
				<div className="flex flex-wrap items-center justify-center md:justify-between">
					<div className="flex">
						<Link href="/">
							<Image width={200} height={56} src="/assets/logo.svg" alt="CodeBazaar" />
						</Link>
					</div>
					<div className="px-4 text-center md:text-right">
						<div className="text-sm text-slate-500 font-semibold py-1">
							Copyright &copy; <span id="get-current-year">2023</span> Developed by{" "}
							<Link href="https://github.com/KUNJ1311" className=" hover:scale-125" target="_blank">
								<span className="text-primary font-bold  hover:underline">Kunj Faladu</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
