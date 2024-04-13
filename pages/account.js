import { logoutUser } from "@/lib/actions/userAction";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

const Account = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
		router.push("/");
	};

	return (
		<div className="flex flex-1 w-full h-full justify-center font-poppins">
			<div className="flex flex-1 h-full flex-col justify-start max-w-5xl">
				<h2 className="font-medium lg:text-4xl md:text-3xl text-2xl py-5 justify-center flex">Your Account</h2>
				<div className="flex flex-wrap justify-center max-w-5xl">
					<Link href={"/orders"}>
						<div className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4">
							<div className="flex justify-center items-center mr-4 w-1/4">
								<img src="/assets/orders.svg" alt="your orders" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
							</div>
							<div className="flex flex-col w-3/4">
								<span className="font-medium text-sm md:text-base lg:text-lg">Your Orders</span>
								<span className="text-gray-600 text-xs md:text-sm lg:text-base font-normal">Track, return or buy somthing again</span>
							</div>
						</div>
					</Link>
					<div className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/user.svg" alt="profile" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-sm md:text-base lg:text-lg">Profile</span>
							<span className="text-gray-600 text-xs md:text-sm lg:text-base font-normal">Edit name, email and mobile number</span>
						</div>
					</div>
					<div className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/location.svg" alt="address" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-sm md:text-base lg:text-lg">Your Address</span>
							<span className="text-gray-600 text-xs md:text-sm lg:text-base font-normal">Edit address for orders</span>
						</div>
					</div>
					<Link href={"/changepassword"} className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4 h-[55px]">
							<img src="/assets/changepass.svg" alt="Change Password" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-sm md:text-base lg:text-lg">Change Password</span>
						</div>
					</Link>
					<Link href={"/contact"} className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/contact.svg" alt="contact us" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-sm md:text-base lg:text-lg">Contact Us</span>
						</div>
					</Link>
					<div className="shadow-card min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-red-100 cursor-pointer transition-all sm:mr-4 mb-2 md:mb-4" onClick={handleLogout}>
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/logout.svg" alt="logout" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-sm md:text-base lg:text-lg">Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
