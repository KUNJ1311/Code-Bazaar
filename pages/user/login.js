import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiLockClosed } from "react-icons/hi2";
import { toast } from "react-toastify";

const Login = () => {
	const router = useRouter();
	const [credentials, setCredentials] = useState({ email: "", password: "" });

	useEffect(() => {
		if (localStorage.getItem("token")) {
			router.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const { email, password } = credentials;
			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/login`, {
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
		} catch (error) {
			console.log(error);
		}
	};

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div className="flex flex-col flex-1 justify-center bg-white rounded-lg">
			<div className="text-[#333] flex items-start justify-center py-3 px-2">
				<div className="shadow-card w-full sm:w-11/12 max-w-4xl rounded-md p-6 bg-white">
					<div className="grid md:grid-cols-2 items-center md:gap-8">
						<div className="max-md:order-1">
							<img src="/assets/shop.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
						</div>
						<form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
							<h3 className="mb-3 sm:text-4xl text-2xl sm:font-bold font-semibold text-primary">Log In</h3>
							<div className="flex flex-col">
								<label htmlFor="email" className="mt-4 mb-2 text-xs sm:text-sm font-medium flex">
									Email
								</label>
								<div className="relative flex">
									<input onChange={onChange} name="email" id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 pl-11 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center mb-7 px-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
											<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
										</svg>
									</div>
								</div>
							</div>
							<div className="flex flex-col">
								<label htmlFor="password" className="mb-2 sm:text-base text-sm text-start text-slate-900">
									Password
								</label>
								<div className="relative flex">
									<input onChange={onChange} name="password" id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-7 pl-11 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center mb-7 px-4">
										<HiLockClosed className="h-4 w-4 text-gray-400" />
									</div>
								</div>
							</div>
							<div className="mb-5 sm:text-base text-sm">
								Forgot Password?{" "}
								<Link href="/user/forgetpassword" className="mr-4 sm:text-base text-sm font-medium text-primary">
									Reset Now
								</Link>
							</div>
							<button className="w-full px-6 py-5 mb-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light bg-primary">Log In</button>
							<p className="sm:text-base text-sm leading-relaxed text-slate-900">
								Don&apos;t have an account?{" "}
								<Link href="/user/signup" className="font-semibold text-primary">
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
