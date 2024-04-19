import Head from "next/head";
import { useEffect, useState } from "react";
import { FaAddressCard } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import { toast } from "react-toastify";

const Profile = () => {
	const [disabled, setDisabled] = useState(true);

	const [details, setDetails] = useState({ name: "", email: "", phone: "" });
	const { name, email, phone } = details;

	useEffect(() => {
		if (name && email && phone) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [details]);

	const onChange = async (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
	};

	useEffect(() => {
		const getUser = async () => {
			try {
				const user = localStorage.getItem("token");
				if (!user) {
					return;
				}
				const { token } = JSON.parse(user);
				const res = await fetch("/api/user/get", {
					method: "POST",
					body: JSON.stringify({ token }),
				});
				const data = await res.json();
				if (data.success) {
					setDetails((prevDetails) => ({
						...prevDetails,
						email: data.email,
						name: data.name,
						phone: data.phone,
					}));
				}
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
	}, []);

	const handleUpdate = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				return;
			}
			const numberRegex = /^\d+$/;
			if (phone.length !== 10 || !numberRegex.test(phone)) {
				return toast.info(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Please enter your 10 digit phone number.</span>);
			}
			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/update`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token: JSON.parse(token).token, name, phone }),
			});

			const json = await response.json();
			if (response.status !== 201) {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{json.msg}</span>);
			}
			if (json.success) {
				toast.success(<span className="text-gray-900 lg:text-base text-sm font-medium">Profile Updated Successfully.</span>);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Profile - CodeBazaar</title>
			</Head>
			<div className="w-full flex flex-col items-center flex-1">
				<div className="flex justify-center flex-col mt-7">
					<h1 className="text-2xl lg:text-3xl text-center font-medium">Profile</h1>
					<h2 className="text-xs lg:text-base text-center text-gray-500">Edit your name and mobile number.</h2>
				</div>
				<div className="container max-w-4xl bg-gray-50 border border-gray-200 rounded-md px-4 pt-2 lg:mx-0 mx-4 max-[300px]:mx-0 max-[300px]:px-2 mt-7 mb-8 ">
					<div className="flex flex-col">
						<label htmlFor="email" className="mt-4 mb-2 block text-xs sm:text-sm font-medium">
							Email
						</label>
						<div className="relative flex">
							<input type="email" id="email" name="email" value={email} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="your.email@gmail.com" readOnly />
							<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
								</svg>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:space-x-2">
							<div className="flex flex-col flex-1">
								<label htmlFor="name" className="mt-4 mb-2 block text-xs sm:text-sm font-medium">
									Name
								</label>
								<div className="relative flex">
									<input onChange={onChange} defaultValue={name} type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter Your Name" />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<FaAddressCard className="h-4 w-4 text-gray-400" />
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-1">
								<label htmlFor="phone" className="mt-4 mb-2 block text-xs sm:text-sm font-medium ">
									Phone
								</label>
								<div className="relative flex">
									<input onChange={onChange} defaultValue={phone} type="text" id="phone" name="phone" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter Your 10 Digit Phone No." />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<HiPhone className="h-4 w-4 text-gray-400 " />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-4 lg:mb-4 mb-8 w-full">
						<button type="button" onClick={handleUpdate} disabled={disabled} className="disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center rounded-md border border-transparent bg-primary px-4 lg:py-3 py-[10px] text-sm lg:text-base font-medium text-white hover:bg-primary-dark active:scale-95 disabled:active:scale-100 shadow-slate-400 shadow-md active:shadow">
							Update
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
