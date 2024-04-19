import { useState } from "react";
import { toast } from "react-toastify";

const OTP = () => {
	const [otp, setOtp] = useState(new Array(6).fill(""));
	const [timer, setTimer] = useState(100);
	const [resendDisabled, setResendDisabled] = useState(false);

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
		const code = otp.join("");
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
		// if (props.side === "sign-in-container") {
		// 	await toast.promise(generateOTP(email), {
		// 		pending: "Sending OTP to your email...",
		// 		success: "Success! Your OTP has been sent.",
		// 		error: "Unable to send OTP. Please try again..",
		// 	});
		// } else if (props.side === "sign-up-container") {
		// 	await toast.promise(generateOTPnewUser(email), {
		// 		pending: "Sending OTP to your email...",
		// 		success: "Success! Your OTP has been sent.",
		// 		error: "Unable to send OTP. Please try again..",
		// 	});
		// } else {
		// 	toast.error("Internal Server Error..!");
		// }
	};

	return (
		<>
			<div className={`form-container sign-up-container`}>
				<form onSubmit={handleVerifyOTP} className="form-OTP">
					<h1 className="h">OTP Verification</h1>
					<span className="ac-line"></span>
					<span className="sm-text pt-5 pb-5">Enter 6 digit OTP sent to your E-mail address.</span>
					<div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px" }}>
						{otp.map((digit, index) => (
							<input key={index} type="number" maxLength="1" className="otp-input" value={digit} onChange={(e) => handleChange(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} />
						))}
					</div>
					<button className="robtn" style={{ marginTop: "32px" }}>
						Verify
					</button>
					<div className="py-4 resend">
						{resendDisabled ? (
							<span style={{ fontSize: "15px" }}>
								You can request a new OTP after <span style={{ color: "red" }}>{timer}s</span>.
							</span>
						) : (
							<span style={{ fontSize: "15px" }}>
								Can&apos;t get OTP?
								<span className="text-red" style={{ fontSize: "15px", color: "red" }} onClick={startTimer}>
									{" "}
									Resend
								</span>
							</span>
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default OTP;
