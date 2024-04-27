import connectDb from "@/middleware/mongoose";
import Otp from "@/models/Otp.js";
import User from "@/models/User.js";
import { registerMail } from "@/pages/api/mail/mailer.js";

const handler = async (req, res) => {
	if (req.method == "GET") {
		try {
			const { email } = req.query;
			let user = await User.findOne({ email });
			if (!user) {
				return res.status(401).send({ success: false, msg: "Email address does not exist." });
			}

			let otpData = await Otp.findOne({ email });
			const otpCode = Math.floor(100000 + Math.random() * 900000);

			if (!otpData) {
				//* create new OTP object if it doesn't exist
				otpData = new Otp({
					email,
					code: otpCode,
					verified: false,
					expiresIn: new Date(Date.now() + 300 * 1000), //* 5 minutes
				});
			} else {
				//* update existing OTP object with new code and expiration time
				otpData.code = otpCode;
				otpData.verified = false;
				otpData.expiresIn = new Date(Date.now() + 300 * 1000); //* 5 minutes
			}
			await otpData.save();

			const data = await registerMail({
				username: user.username,
				userEmail: email,
				subject: "Your OTP for Verification",
				code: otpCode,
				extra: "verify and change your password.",
			});

			if (data.success) {
				return res.status(200).send({ success: true, msg: data.msg });
			} else {
				return res.status(400).send({ success: false, msg: data.msg });
			}
		} catch (error) {
			console.log(error);
			return res.status(400).send({ success: false, msg: "Try Again..." });
		}
	} else {
		return res.status(405).json({ success: false, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
