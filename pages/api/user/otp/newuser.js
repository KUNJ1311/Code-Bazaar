import connectDb from "@/middleware/mongoose";
import Otp from "@/models/Otp.js";
import User from "@/models/User";
import { registerMail } from "@/pages/api/mail/mailer.js";

const handler = async (req, res) => {
	if (req.method == "GET") {
		try {
			const { email, name } = req.query;
			//* check the existing user
			const existUsername = await User.findOne({ name });
			if (existUsername) {
				return res.status(400).json({ msg: "Sorry a user with this Username is already exists" });
			}
			//* check the existing email
			const existEmail = await User.findOne({ email });
			if (existEmail) {
				return res.status(400).json({ msg: "Sorry E-mail Id is already exists" });
			}
			let otpData = await Otp.findOne({ email });
			let otpCode;
			if (!otpData) {
				//* create new OTP object if it doesn't exist
				otpCode = Math.floor(100000 + Math.random() * 900000);
				otpData = new Otp({
					email,
					code: otpCode,
					verified: false,
					expiresIn: new Date(Date.now() + 300 * 1000), //* 5 minutes
				});
			} else {
				//* update existing OTP object with new code and expiration time
				otpCode = Math.floor(100000 + Math.random() * 900000);
				otpData.code = otpCode;
				otpData.verified = false;
				otpData.expiresIn = new Date(Date.now() + 300 * 1000); //* 5 minutes
			}
			await otpData.save();

			const data = await registerMail({
				userEmail: email,
				subject: "Your OTP for Verification",
				code: otpCode,
				extra: "complete your registration process.",
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
