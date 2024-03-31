import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
	const router = useRouter();
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = credentials;
		const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		if (json.success) {
			localStorage.setItem("token", JSON.stringify({ token: json.token, key: Math.random() }));
			router.push(`${process.env.NEXT_PUBLIC_HOST}/account`);
		} else {
			toast.error(<span className="text-gray-900 lg:text-base text-sm font-medium">Wrong credentials. Try again...</span>);
		}
	};
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<div className=" flex flex-col mx-auto bg-white rounded-lg font-poppins">
			<div className="text-[#333] flex items-start justify-center lg:py-12 sm:py-3 py-0">
				<div className="sm:shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] w-full sm:w-11/12 max-w-4xl rounded-md p-6 bg-white">
					<div className="grid md:grid-cols-2 items-center md:gap-8">
						<div className="max-md:order-1">
							<img src="/assets/shop.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
						</div>
						<form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 sm:text-4xl text-2xl sm:font-bold font-semibold text-primary">Log In</h3>
							{/* <a className="flex items-center justify-center w-full py-4 my-6 text-base font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-slate-200 cursor-pointer">
								<FcGoogle className="mr-2 h-6 w-6" />
								Sign In with Google
							</a>
							<div className="flex items-center mb-3">
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
								<p className="mx-4 text-gray-600">or</p>
								<hr className="h-0 border-b border-solid border-gray-500 grow" />
							</div> */}
							<label htmlFor="email" className="mb-2 sm:text-base text-sm text-start text-slate-900">
								Email
							</label>
							<input onChange={onChange} name="email" id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 mr-2 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<label htmlFor="password" className="mb-2 sm:text-base text-sm text-start text-slate-900">
								Password
							</label>
							<input onChange={onChange} name="password" id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
							<div className="mb-5 sm:text-base text-sm">
								Forgot Password?{" "}
								<Link href="/forgetpassword" className="mr-4 sm:text-base text-sm font-medium text-primary">
									Reset Now
								</Link>
							</div>
							<button className="w-full px-6 py-5 mb-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light bg-primary">Log In</button>
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

export default Login;
