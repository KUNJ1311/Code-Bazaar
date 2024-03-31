import { logoutUser } from "@/lib/actions/userAction";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/router";

const Account = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logoutUser());
		router.push(`${process.env.NEXT_PUBLIC_HOST}`);
	};
	return (
		<div className="flex w-full h-full justify-center font-poppins">
			<div className="flex flex-col justify-center max-w-5xl">
				<h2 className="font-medium lg:text-4xl md:text-3xl text-2xl py-5 justify-center flex">Your Account</h2>
				<div className="flex flex-wrap justify-center max-w-5xl">
					<div className="account-card border border-gray-300 min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/orders.svg" alt="order" width="65px" height="65px" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-lg">Your Orders</span>
							<span className="text-gray-600 text-base font-normal">Track, return or buy somthing again</span>
						</div>
					</div>
					<div className="account-card border border-gray-300 min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/user.svg" alt="profile" width="55px" height="55px" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-lg">Profile</span>
							<span className="text-gray-600 text-base font-normal">Edit name, email and mobile number</span>
						</div>
					</div>
					<div className="account-card border border-gray-300 min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/location.svg" alt="address" width="55px" height="55px" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-lg">Your Address</span>
							<span className="text-gray-600 text-base font-normal">Edit address for orders</span>
						</div>
					</div>
					<div className="account-card border border-gray-300 min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all sm:mr-4 mb-4">
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/contact.svg" alt="contact us" width="55px" height="55px" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-lg">Contact Us</span>
						</div>
					</div>
					<div className="account-card border border-gray-300 min-[320px]:w-80 w-full flex items-center rounded-md px-4 py-3 hover:bg-red-100 cursor-pointer transition-all sm:mr-4 mb-4" onClick={handleLogout}>
						<div className="flex justify-center items-center mr-4 w-1/4">
							<img src="/assets/logout.svg" alt="order" width="55px" height="55px" />
						</div>
						<div className="flex flex-col w-3/4">
							<span className="font-medium text-lg">Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
