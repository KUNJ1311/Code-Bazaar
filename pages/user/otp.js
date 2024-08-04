import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";
import ChangePassword from "./changepassword";
import { useRouter } from "next/router";
import Image from "next/image";

const OTP = (props) => {
	const router = useRouter();
	const [otp, setOtp] = useState(new Array(6).fill(""));
	const [timer, setTimer] = useState(100);
	const [resendDisabled, setResendDisabled] = useState(false);
	const [verify, setVerify] = useState(false);

	//* Change opt box - when user enter 1 number send to next box (1 number in each box only)
	const handleChange = (index, e) => {
		const newOtp = [...otp];
		if (e.target.value.length > 1) {
			newOtp[index] = e.target.value.slice(0, 1);
		} else {
			newOtp[index] = e.target.value;
		}
		setOtp(newOtp);
		if (e.target.value !== "" && index < otp.length - 1) {
			e.target.nextElementSibling.focus();
		}
	};

	//* on Backspace remove 1 number from opt box
	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && index > 0 && otp[index] === "") {
			e.target.previousElementSibling.focus();
		}
	};

	//* Verify OTP
	const handleVerifyOTP = async (e) => {
		e.preventDefault();
		const code = otp.join("");
		try {
			const data = await fetch(`/api/user/otp/verify?email=${props.email}&code=${code}`, {
				method: "GET",
			});
			const res = await data.json();
			//* For New user sign up
			if (props.type === "newuser") {
				if (res.success) {
					const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/signup`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ name: props.name, email: props.email, password: props.password }),
					});
					const json = await response.json();
					if (json.success) {
						router.push(`${process.env.NEXT_PUBLIC_HOST}/user/login`);
						return toast.success(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">Your account has been created successfully.</span>);
					} else {
						return toast.error(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">User already exists!</span>);
					}
				} else {
					return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{res.msg}</span>);
				}
			}
			//* for existing users
			else if (props.type === "resetpass") {
				if (res.success) {
					setVerify(true);
					return toast.success(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Verifed Successfully..!</span>);
				} else {
					return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{res.msg}</span>);
				}
			} else {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Error..!</span>);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//* Start timer on Resend OTP
	const startTimer = async (e) => {
		e.preventDefault();

		//* Disable the "Resend" button
		setResendDisabled(true);

		//* Start the timer
		const intervalId = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		setTimeout(() => {
			clearInterval(intervalId);
			setTimer(100);
			setResendDisabled(false);
		}, 100000);

		// //* Re-Generate OTP
		if (props.type === "resetpass") {
			if (!props.email) {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Enter your email.</span>);
			}
			try {
				const id = toast.loading(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Sending OTP to your email...</span>);
				const data = await fetch(`/api/mail/otp/resetpassword?email=${props.email}`, {
					method: "GET",
				});
				const res = await data.json();
				if (res.success) {
					toast.update(id, { render: "An OTP has been sent to your email address.", type: "success", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
				} else {
					toast.update(id, { render: res.msg, type: "error", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
				}
			} catch (error) {
				console.log(error);
			}
		} else if (props.type === "newuser") {
			if (!props.email) {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Enter your email.</span>);
			}
			try {
				const id = toast.loading(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Sending OTP to your email...</span>);
				const data = await fetch(`/api/user/otp/newuser?email=${props.email}`, {
					method: "GET",
				});
				const res = await data.json();
				if (res.success) {
					toast.update(id, { render: "An OTP has been sent to your email address.", type: "success", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
				} else {
					toast.update(id, { render: res.msg, type: "error", isLoading: false, autoClose: 3000, closeButton: true, closeOnClick: true, draggable: true });
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			toast.error("Internal Server Error..!");
		}
	};

	return (
		<>
			{!verify ? (
				<>
					<Head>
						<title>OTP Verification - CodeBazaar</title>
					</Head>
					<div className="flex flex-col flex-1 justify-center bg-white rounded-lg">
						<div className="text-[#333] flex items-start justify-center py-3 sm:px-2">
							<div className="shadow-card w-full sm:w-11/12 max-w-4xl rounded-md sm:p-6 p-2 bg-white">
								<div className="grid md:grid-cols-2 items-center md:gap-8">
									<div className="max-md:order-1">
										<Image src="/assets/otp.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
									</div>
									<form onSubmit={handleVerifyOTP} className="flex justify-center items-center flex-col h-full ">
										<h3 className="mb-3 sm:text-4xl text-2xl sm:font-bold font-semibold text-primary">OTP Verification</h3>
										<p className="break-words mb-4 text-slate-700 sm:text-base text-sm text-center">
											Enter 6 digit OTP sent to your E-mail address.<span className="text-red-500"> *Check spam folder</span>
										</p>
										<div className="flex items-center justify-start sm:gap-3 gap-2">
											{otp.map((digit, index) => (
												<input
													key={index}
													type="number"
													min="0"
													max="9"
													maxLength="1"
													className="sm:w-12 w-11 sm:h-12 h-11 max-[320px]:w-8 max-[320px]:h-8 border-gray-300 border-2 rounded-md bg-transparent outline-none text-center font-semibold sm:text-2xl text-base m-0 p-0 transition-all text-gray-700 space-x-2 focus:border-gray-500 focus:text-gray-500 otp_input"
													style={{ appearance: "textfield" }}
													value={digit}
													onChange={(e) => handleChange(index, e)}
													onKeyDown={(e) => {
														["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
														handleKeyDown(index, e);
													}}
												/>
											))}
										</div>
										<div className="flex justify-center">
											<button onClick={handleVerifyOTP} className="w-[150px] sm:py-5 py-4 my-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light bg-primary">
												Verify
											</button>
										</div>
										<div>
											{resendDisabled ? (
												<span className="mb-5 sm:text-base text-sm">
													You can request a new OTP after <span className="text-red-500">{timer}s.</span>
												</span>
											) : (
												<span className="mb-5 sm:text-base text-sm">
													Can&apos;t get OTP?
													<span className="text-primary hover:text-red-500 cursor-pointer transition-all font-medium" onClick={startTimer}>
														{" "}
														Resend
													</span>
												</span>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<ChangePassword email={props.email} />
			)}
		</>
	);
};

export default OTP;
