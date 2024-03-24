import Link from "next/link";

const forgetpassword = () => {
	return (
		<div className=" flex flex-col flex-grow mx-auto bg-white rounded-lg pt-2 font-poppins">
			<div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
				<div className="flex items-center justify-center w-full lg:p-10 pt-10 px-4">
					<div className="flex items-center max-[500px]:min-w-[350px] max-[360px]:min-w-[300px] max-[300px]:min-w-[230px] min-w-[500px]">
						<form className="flex flex-col w-full h-full justify-center pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 text-4xl font-bold text-slate-900">Forgot Your Password?</h3>
							<p className="break-words mb-4 text-slate-700 text-base">Enter your Email to reset your password.</p>
							<input id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 text-base font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<button className="w-full px-6 py-5 mb-5 text-base font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 bg-indigo-600">Continue</button>
							<p className="text-base leading-relaxed text-slate-900">
								Don&apos;t have an account?{" "}
								<Link href="/signup" className="font-semibold text-indigo-500">
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

export default forgetpassword;
