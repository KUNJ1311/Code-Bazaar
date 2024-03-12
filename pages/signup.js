import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
	return (
		<div className=" flex flex-col mx-auto bg-white rounded-lg pt-2 roboto-font">
			<div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
				<div className="flex items-center justify-center w-full lg:p-10 pt-10 ">
					<div className="flex items-center max-[500px]:min-w-[350px] max-[360px]:min-w-[300px] max-[300px]:min-w-[230px] min-w-[500px]">
						<form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 text-4xl font-extrabold text-slate-900">Sign Up</h3>
							<a className="flex items-center justify-center w-full py-4 my-6 text-sm font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-slate-200 cursor-pointer">
								<FcGoogle className="mr-2 h-6 w-6" />
								Sign Up with Google
							</a>
							<div className="flex items-center mb-3">
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
								<p className="mx-4 text-gray-600">or</p>
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
							</div>
							<label htmlFor="name" className="mb-2 text-sm text-start text-slate-900">
								Name
							</label>
							<input id="name" type="name" placeholder="Enter your name" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<label htmlFor="email" className="mb-2 text-sm text-start text-slate-900">
								Email
							</label>
							<input id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<label htmlFor="password" className="mb-2 text-sm text-start text-slate-900">
								Password
							</label>
							<input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 bg-indigo-600">Sign Up</button>
							<p className="text-sm leading-relaxed text-slate-900">
								Already have an account?{" "}
								<Link href="/login" className="font-bold text-indigo-500">
									Sign In
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
