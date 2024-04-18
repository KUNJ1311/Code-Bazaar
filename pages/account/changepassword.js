import { useEffect, useState } from "react";
import { HiLockClosed } from "react-icons/hi2";
import { toast } from "react-toastify";

const ChangePassword = () => {
	const [disabled, setDisabled] = useState(true);

	const [details, setDetails] = useState({ oldpassword: "", newpassword: "", cnewpassword: "" });
	const { oldpassword, newpassword, cnewpassword } = details;

	useEffect(() => {
		if (oldpassword && newpassword && cnewpassword) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [details]);

	const onChange = async (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
	};

	const handleChange = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				return;
			}

			if (newpassword !== cnewpassword) {
				return toast.info(<span className="text-gray-900 lg:text-base text-sm font-medium">Password not matched.</span>);
			}

			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/password/change`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token: JSON.parse(token).token, oldpassword, newpassword }),
			});

			const json = await response.json();
			if (response.status !== 201) {
				return toast.error(<span className="text-gray-900 lg:sm:text-base text-xs sm:text-sm font-medium">{json.msg}</span>);
			}
			if (json.success) {
				toast.success(<span className="text-gray-900 lg:text-base text-sm font-medium">Password Changed Successfully.</span>);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full flex flex-col items-center flex-1">
			<div className="flex justify-center flex-col mt-7">
				<h1 className="text-2xl lg:text-3xl text-center font-medium">Change Password</h1>
			</div>
			<div className="container max-w-4xl bg-gray-50 border border-gray-200 rounded-md px-4 pt-2 lg:mx-0 mx-4 max-[300px]:mx-0 max-[300px]:px-2 mt-7 mb-8 ">
				<div className="flex flex-col">
					<label htmlFor="oldpassword" className="mt-4 mb-2 block text-xs sm:text-sm font-medium">
						Old Password
					</label>
					<div className="relative flex">
						<input onChange={onChange} type="password" id="oldpassword" name="oldpassword" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter your old password" />
						<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
							<HiLockClosed className="h-4 w-4 text-gray-400" />
						</div>
					</div>
					<div className="flex flex-col sm:flex-row sm:space-x-2">
						<div className="flex flex-col flex-1">
							<label htmlFor="newpassword" className="mt-4 mb-2 block text-xs sm:text-sm font-medium">
								New Password
							</label>
							<div className="relative flex">
								<input onChange={onChange} type="password" id="newpassword" name="newpassword" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Enter your new password" />
								<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
									<HiLockClosed className="h-4 w-4 text-gray-400" />
								</div>
							</div>
						</div>
						<div className="flex flex-col flex-1">
							<label htmlFor="cnewpassword" className="mt-4 mb-2 block text-xs sm:text-sm font-medium ">
								Confirm New Password
							</label>
							<div className="relative flex">
								<input onChange={onChange} type="password" id="cnewpassword" name="cnewpassword" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs sm:text-sm shadow-sm outline-none focus:border-primary focus:ring-primary" placeholder="Confirm your new password" />
								<div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
									<HiLockClosed className="h-4 w-4 text-gray-400 " />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 lg:mb-4 mb-8 w-full">
					<button type="button" disabled={disabled} onClick={handleChange} className="disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center rounded-md border border-transparent bg-primary px-4 lg:py-3 py-[10px] text-sm lg:text-base font-medium text-white hover:bg-primary-dark active:scale-95 disabled:active:scale-100 shadow-slate-400 shadow-md active:shadow">
						Change
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
