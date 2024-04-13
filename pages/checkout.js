import CartList from "@/components/Shop/CartList";
import { FaAddressCard } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { updateCart } from "@/lib/actions/cartAction";

const Checkout = () => {
	const { cart, subTotal } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const router = useRouter();

	const [disabled, setDisabled] = useState(true);
	const [service, setService] = useState(false);

	const [details, setDetails] = useState({ name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "" });
	const { name, email, phone, address, city, state, pincode } = details;

	const onChange = async (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });

		if (name === "pincode") {
			if (value.length !== 6) {
				setDetails((prevDetails) => ({
					...prevDetails,
					city: "",
					state: "",
				}));
				setService(false);
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
		}
	};

	useEffect(() => {
		const getUser = async () => {
			try {
				const { token } = JSON.parse(localStorage.getItem("token"));
				const res = await fetch("/api/getuser", {
					method: "POST",
					body: JSON.stringify({ token }),
				});
				const data = await res.json();
				setDetails((prevDetails) => ({
					...prevDetails,
					email: data.email,
					name: data.name,
				}));
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
	}, []);

	useEffect(() => {
		if (name && email && phone && address && city && state && pincode) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [details]);

	const makePayment = async () => {
		try {
			const numberRegex = /^\d+$/;
			if (phone.length !== 10 || !numberRegex.test(phone)) {
				return toast.info(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">Please enter your 10 digit phone number.</span>);
			}
			if (pincode.length !== 6 || !numberRegex.test(pincode)) {
				return toast.info(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">Please enter your 6 digit PIN Code.</span>);
			}
			const res = await fetch("/api/order/create", {
				method: "POST",
				body: JSON.stringify({ email: email, amount: subTotal, cart: cart, phone: phone, address: address, city: city, state: state, pincode: pincode }),
			});

			const data = await res.json();
			if (res.status !== 201) {
				if (res.status === 422) {
					localStorage.removeItem("cart");
					dispatch(updateCart([]));
				}
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">{data.msg}</span>);
			}

			const options = {
				key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
				name: "CodeBazaar",
				currency: data.order.currency,
				amount: data.order.amount,
				order_id: data.order.id,
				theme: {
					color: "#088178",
				},
				image: `${process.env.NEXT_PUBLIC_HOST}/assets/icon.svg`,
				prefill: {
					name: name,
					email: email,
				},
				handler: async function (response) {
					const data = await fetch("/api/order/verify", {
						method: "POST",
						body: JSON.stringify({
							razorpay_payment_id: response.razorpay_payment_id,
							razorpay_order_id: response.razorpay_order_id,
							razorpay_signature: response.razorpay_signature,
						}),
					});
					if (data.status === 200) {
						router.push(`/order?id=${response.razorpay_order_id}`);
						localStorage.setItem("cart", []);
						dispatch(updateCart([]));
					}
				},
			};

			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
			paymentObject.on("payment.failed", function (response) {
				toast.error(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">Payment failed. Please try again.</span>);
			});
		} catch (error) {
			console.log(error);
			toast.error(<span className="text-gray-900 lg:sm:text-base text-sm font-medium">Please try again.</span>);
		}
	};
	return (
		<>
			{cart.length == 0 ? (
				<>
					<div className="px-4 lg:pb-8 pt-8 pb-0 padding-minus font-poppins">
						<div className="flex flex-col justify-center">
							<div className="pt-7 pb-5 flex justify-center">
								<img src="/assets/emptycart.jpg" className="max-h-[550px]" alt="Empty Cart" />
							</div>
						</div>
						<div className="pt-4 pb-5 flex justify-center text-center text-xs md:text-sm text-gray-500">
							<p>
								<Link href={"/shop"} className="text-lg md:text-2xl font-medium text-primary hover:text-indigo-500">
									Continue Shopping
									<span aria-hidden="true"> &rarr;</span>
								</Link>
							</p>
						</div>
					</div>
				</>
			) : (
				<div className="w-full mx-auto font-poppins">
					<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 ">
						<div className="px-4 lg:pb-8 pt-8 pb-0 padding-minus">
							<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium padding-add ">Order Summary</p>
							<p className="text-xs md:text-sm lg:text-base text-gray-500 padding-add">Review Cart Items</p>
							<div className="mt-3 rounded-lg border bg-white px-2 sm:px-6 pb-6">
								<CartList />
							</div>
						</div>
						<div className="mt-0 bg-gray-50 border border-gray-200 rounded-md px-4 pt-4 lg:mx-0 mx-4 lg:mt-10 mb-8 ">
							<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">Delivery Details</p>
							<p className="text-sm md:text-base text-gray-500">Complete your order by providing your delivery details.</p>
							<div className="flex flex-col ">
								<label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
									Email
								</label>
								<div className="relative flex">
									<input type="email" id="email" name="email" value={email} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="your.email@gmail.com" readOnly />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
											<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:space-x-2">
									<div className="flex flex-col flex-1">
										<label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
											Name
										</label>
										<div className="relative flex">
											<input value={name} type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter Your Name" readOnly />
											<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
												<FaAddressCard className="h-4 w-4 text-gray-400 " />
											</div>
										</div>
									</div>
									<div className="flex flex-col flex-1">
										<label htmlFor="phone" className="mt-4 mb-2 block text-sm font-medium ">
											Phone
										</label>
										<div className="relative flex">
											<input onChange={onChange} type="text" id="phone" name="phone" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter Your 10 Digit Phone No." />
											<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
												<HiPhone className="h-4 w-4 text-gray-400 " />
											</div>
										</div>
									</div>
								</div>
								<label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">
									Billing Address
								</label>
								<div className="relative mb-3 flex">
									<textarea onChange={onChange} type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary max-h-16 min-h-[45px]" placeholder="Street Address" />
									<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<img className="h-4 w-4 object-contain" src="/assets/india.svg" alt="" />
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 space-y-3">
									<div className="flex relative w-full">
										<input onChange={onChange} type="text" name="pincode" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="PIN Code" />
										<div className="h-full flex absolute right-2">
											{service && service != null && (
												<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
													<circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
													<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
												</svg>
											)}
										</div>
									</div>
									<input value={city} type="text" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="City" readOnly />
									<input value={state} type="text" name="state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="State" readOnly />
								</div>

								<div className="mt-6 border-t border-b py-2">
									<div className="flex items-center justify-between">
										<p className="text-base leading-4 text-gray-800">Subtotal</p>
										<p className="font-normal text-gray-600">₹{subTotal}</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-base leading-4 text-gray-800">Shipping</p>
										<p className="font-normal text-gray-600">₹8.00</p>
									</div>
								</div>
								<div className="mt-6 flex items-center justify-between">
									<p className="text-xl font-semibold leading-4 text-gray-800">Total</p>
									<p className="text-xl font-medium text-gray-600">₹{subTotal}</p>
								</div>
							</div>
							<div className="mt-4 lg:mb-4 mb-8 w-full">
								<button type="button" onClick={makePayment} disabled={disabled} className="disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark active:scale-95 disabled:active:scale-100 shadow-slate-400 shadow-md active:shadow">
									Place Order
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Checkout;
