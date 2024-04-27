import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import Otp from "@/models/Otp";

const handler = async (req, res) => {
	if (req.method == "PUT") {
		try {
			const { email, newpassword } = req.body;
			let otpData = await Otp.findOne({ email });
			if (otpData && otpData.verified && otpData.expiresIn > new Date().getTime()) {
				const user = await User.findOne({ email });
				if (!user) {
					return res.status(200).json({ success: false, msg: "User not found" });
				}
				await User.findOneAndUpdate({ email }, { password: CryptoJS.AES.encrypt(newpassword, process.env.AES_SECRET).toString() });
				//* delete the OTP data
				await Otp.deleteOne({ email });
				return res.status(201).send({ success: true, msg: "Record Updated Successfully" });
			} else {
				return res.status(401).send({ success: false, msg: "OTP Expired..!" });
			}
		} catch (error) {
			console.log(error);
			return res.status(401).json({ success: false, msg: "Try Again..." });
		}
	} else {
		return res.status(405).json({ success: false, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
