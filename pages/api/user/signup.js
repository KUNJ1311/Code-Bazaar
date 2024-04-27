import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import Otp from "@/models/Otp";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const { name, email } = req.body;
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
			const otpData = await Otp.findOne({ email });
			//* return error response if OTP is not verified
			if (!otpData || !otpData.verified || otpData.expiresIn < new Date(Date.now())) {
				return res.status(401).send({ error: "Please verify your OTP first" });
			}
			//* register user
			let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString() });
			await u.save();
			return res.status(201).json({ success: true });
		} catch (error) {
			console.log(error);
			return res.status(401).json({ success: false, msg: "Try Again..." });
		}
	} else {
		return res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
