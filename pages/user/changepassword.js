import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiLockClosed } from "react-icons/hi2";
import { toast } from "react-toastify";

const ChangePassword = (props) => {
	const router = useRouter();
	const [credentials, setCredentials] = useState({ password: "", repassword: "" });

	useEffect(() => {
		if (localStorage.getItem("token")) {
			router.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const { password, repassword } = credentials;
			if (password !== repassword) {
				console.log(password, repassword);
				return toast.info(<span className="text-gray-900 lg:text-base text-sm font-medium">Passwords don&apos;t match.</span>);
			}

			const data = await fetch(`/api/user/password/forgot`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: props.email, newpassword: repassword }),
			});
			const res = await data.json();
			if (res.success) {
				router.push(`${process.env.NEXT_PUBLIC_HOST}/user/login`);
				toast.success(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Password Changed Successfully..!</span>);
			} else {
				toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{res.msg}</span>);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Head>
				<title>Change Password - CodeBazaar</title>
			</Head>
			<div className="flex flex-col flex-1 justify-center bg-white rounded-lg">
				<div className="text-[#333] flex items-start justify-center py-3 sm:px-2">
					<div className="shadow-card w-full sm:w-11/12 max-w-4xl rounded-md sm:p-6 p-2 bg-white">
						<div className="grid md:grid-cols-2 items-center md:gap-8">
							<div className="max-md:order-1">
								<Image src="/assets/forgot.svg" className="md:flex hidden w-full object-cover" alt="login-image" />
							</div>
							<form onSubmit={handleSubmit} className="flex flex-col w-full h-full text-center justify-center bg-white rounded-3xl">
								<h3 className="mb-5 sm:text-4xl text-2xl sm:font-bold font-semibold text-primary">Change Password</h3>
								<div className="flex flex-col">
									<label htmlFor="password" className="mb-2 sm:text-base text-sm text-start text-slate-900">
										New Password
									</label>
									<div className="relative flex">
										<input onChange={onChange} name="password" id="password" type="password" placeholder="Enter new password" className="flex items-center w-full px-5 py-4 mb-7 pl-11 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
										<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center mb-7 px-4">
											<HiLockClosed className="h-4 w-4 text-gray-400" />
										</div>
									</div>
								</div>
								<div className="flex flex-col">
									<label htmlFor="repassword" className="mb-2 sm:text-base text-sm text-start text-slate-900">
										Confirm New Password
									</label>
									<div className="relative flex">
										<input onChange={onChange} name="repassword" id="repassword" type="password" placeholder="Confirm your new password" className="flex items-center w-full px-5 py-4 mb-7 pl-11 sm:text-base text-sm font-normal outline-none focus:bg-slate-200 placeholder:text-slate-500 bg-slate-100 text-slate-900 rounded-2xl" />
										<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center mb-7 px-4">
											<HiLockClosed className="h-4 w-4 text-gray-400" />
										</div>
									</div>
								</div>
								<div className="flex justify-center">
									<button className="w-[150px] sm:py-5 py-4 mb-5 sm:text-base text-sm font-semibold leading-none text-white transition duration-300 rounded-2xl hover:bg-primary-dark focus:ring-4 focus:ring-primary-light bg-primary">Change</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangePassword;
