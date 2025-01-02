import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Address = () => {
	const [disabled, setDisabled] = useState(true);
	const [service, setService] = useState(false);
	const [details, setDetails] = useState({ address: "", city: "", state: "", pincode: "380008" });
	const { address, city, state, pincode } = details;

	useEffect(() => {
		if (address && city && state && pincode) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [details]);

	const onChange = async (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });

		if (name === "pincode") {
			getPinData(value);
		}
	};

	const getPinData = async (value) => {
		if (value.length !== 6) {
			setDetails((prevDetails) => ({
				...prevDetails,
				city: "",
				state: "",
			}));
		} else if (value.length === 6) {
			try {
				const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
				const pinJson = await pins.json();
				if (Object.keys(pinJson).includes(value)) {
					setDetails((prevDetails) => ({
						...prevDetails,
						city: pinJson[value][0],
						state: pinJson[value][1],
					}));
					setService(true);
				} else {
					setDetails((prevDetails) => ({
						...prevDetails,
						city: "",
						state: "",
					}));
					setService(false);
				}
			} catch (error) {
				console.log("Error fetching pincode data:", error);
			}
		}
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
						address: data.address,
						pincode: data.pincode,
					}));
					getPinData(data.pincode);
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
			if (pincode.length !== 6 || !numberRegex.test(pincode)) {
				return toast.info(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">Please enter your 6 digit PIN Code.</span>);
			}

			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/address/update`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token: JSON.parse(token).token, address, pincode }),
			});

			const json = await response.json();
			if (response.status !== 201) {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{json.msg}</span>);
			}
			if (json.success) {
				toast.success(<span className="text-gray-900 lg:text-base text-sm font-medium">Address Updated Successfully.</span>);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Address - CodeBazaar</title>
			</Head>
			<div className="w-full flex flex-col items-center flex-1">
				<div className="flex justify-center flex-col mt-7">
					<h1 className="text-2xl lg:text-3xl text-center font-medium">Address</h1>
					<h2 className="text-xs lg:text-base text-center text-gray-500">Edit address for orders.</h2>
				</div>
				<div className="container max-w-4xl bg-gray-50 border border-gray-200 rounded-md px-4 pt-2 lg:mx-0 mx-4 max-[300px]:mx-0 max-[300px]:px-2 mt-7 mb-8">
					<div className="flex flex-col">
						<label htmlFor="address" className="mt-4 mb-2 block text-xs sm:text-sm font-medium">
							Billing Address
						</label>
						<div className="relative mb-3 flex">
							<textarea onChange={onChange} defaultValue={address} type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary max-h-16 min-h-[45px]" placeholder="Street Address" />
							<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
								<img className="h-4 w-4 object-contain" src="/assets/india.svg" alt="" />
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 space-y-3">
							<div className="flex relative w-full">
								<input onChange={onChange} defaultValue={pincode} type="text" name="pincode" className="w-full rounded-md border border-gray-200 px-4 py-3 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="PIN Code" />
								<div className="h-full flex absolute right-2">
									{pincode.length === 6 && service ? (
										<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
											<circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
											<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
										</svg>
									) : (
										pincode.length === 6 && (
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" className="checkmark">
												<circle cx="26" cy="26" r="25" fill="none" className="checkmark__circle checkmark__cross"></circle> <path fill="none" d="M 12,12 L 40,40 M 40,12 L 12,40" className="checkmark__check"></path>
											</svg>
										)
									)}
								</div>
							</div>
							<input value={city} type="text" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="City" readOnly />
							<input value={state} type="text" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="State" readOnly />
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

export default Address;
