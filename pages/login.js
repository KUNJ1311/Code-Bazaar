import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	return (
		<div className=" flex flex-col mx-auto bg-white rounded-lg pt-2 font-poppins">
			<div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
				<div className="flex items-center justify-center w-full lg:p-10 pt-10 ">
					<div className="flex items-center max-[500px]:min-w-[350px] max-[360px]:min-w-[300px] max-[300px]:min-w-[230px] min-w-[500px]">
						<form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 text-4xl font-bold text-slate-900">Sign In</h3>
							<a className="flex items-center justify-center w-full py-4 my-6 text-base font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-slate-200 cursor-pointer">
								<FcGoogle className="mr-2 h-6 w-6" />
								Sign In with Google
							</a>
							<div className="flex items-center mb-3">
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
								<p className="mx-4 text-gray-600">or</p>
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
							</div>
							<label htmlFor="email" className="mb-2 text-base text-start text-slate-900">
								Email
							</label>
							<input id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 text-base font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<label htmlFor="password" className="mb-2 text-base text-start text-slate-900">
								Password
							</label>
							<input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-base font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<div className="flex flex-row justify-between mb-8 ">
								<div className="flex items-center ">
									<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded  cursor-pointer" />
									<label htmlFor="remember_me" className="ml-2 block text-base text-gray-900 cursor-pointer">
										Remember me
									</label>
								</div>
								<Link href="/forgetpassword" className="mr-4 text-base font-medium text-indigo-600">
									Forgot Password?
								</Link>
							</div>
							<button className="w-full px-6 py-5 mb-5 text-base font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 bg-indigo-600">Sign In</button>
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

export default Login;
