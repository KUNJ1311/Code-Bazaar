import Link from "next/link";

const ForgetPassword = () => {
	return (
		<div className=" flex flex-col mx-auto bg-white rounded-lg font-poppins">
			<div className="text-[#333] flex items-start justify-center lg:py-12 sm:py-3 py-0">
				<div className="sm:shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] w-full sm:w-11/12 max-w-4xl rounded-md p-6 bg-white">
					<div className="grid md:grid-cols-2 items-center md:gap-8">
						<div className="max-md:order-1">
							<img src="/assets/forgot.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
						</div>
						<form className="flex flex-col w-full h-full justify-center pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 sm:text-4xl sm:font-bold text-2xl font-semibold text-primary">Forgot Your Password?</h3>
							<p className="break-words mb-4 text-slate-700 sm:text-base text-sm">Enter your Email to reset your password.</p>
							<input id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<button className="w-full px-6 py-5 mb-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light  bg-primary">Continue</button>
							<p className="sm:text-base text-sm leading-relaxed text-slate-900">
								Don&apos;t have an account?{" "}
								<Link href="/signup" className="font-semibold text-primary">
									Sign Up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
