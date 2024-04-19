import OTP from "@/pages/user/otp";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [renderOTP, setRenderOTP] = useState(false);
	const onChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			router.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleReset = async (e) => {
		e.preventDefault();
		try {
			const id = toast.loading(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Sending OTP to your email...</span>);
			const data = await fetch(`/api/mail/otp/resetpassword?email=${email}`, {
				method: "GET",
			});
			const res = await data.json();
			if (res.success) {
				toast.update(id, { render: "An OTP has been sent to your email address.", type: "success", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
				setRenderOTP(true);
			} else {
				toast.update(id, { render: res.msg, type: "error", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Reset Password - CodeBazaar</title>
			</Head>
			{!renderOTP ? (
				<div className=" flex flex-col flex-1 justify-center bg-white rounded-lg">
					<div className="text-[#333] flex items-start justify-center py-3 px-2">
						<div className="shadow-card w-full sm:w-11/12 max-w-4xl rounded-md p-6 bg-white">
							<div className="grid md:grid-cols-2 items-center md:gap-8">
								<div className="max-md:order-1">
									<img src="/assets/forgot.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
								</div>
								<form className="flex flex-col w-full h-full justify-center pb-6 text-center bg-white rounded-3xl">
									<h3 className="mb-3 sm:text-4xl sm:font-bold text-2xl font-semibold text-primary">Forgot Your Password?</h3>
									<p className="break-words mb-4 text-slate-700 sm:text-base text-sm">Enter your Email to reset your password.</p>
									<div className="flex flex-col">
										<div className="relative flex">
											<input onChange={onChange} name="email" id="email" type="email" placeholder="your.email@gmail.com" className="flex items-center w-full px-5 py-4 pl-11 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 mb-7 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
											<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center mb-7 px-4">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
													<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
												</svg>
											</div>
										</div>
									</div>
									<button onClick={handleReset} className="w-full px-6 py-5 mb-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light  bg-primary">
										Continue
									</button>
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
			) : (
				<OTP />
			)}
		</>
	);
};

export default ForgetPassword;
