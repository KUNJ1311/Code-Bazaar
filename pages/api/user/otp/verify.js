import connectDb from "@/middleware/mongoose";
import Otp from "@/models/Otp.js";

const handler = async (req, res) => {
	if (req.method == "GET") {
		try {
			const { code, email } = req.query;
			let otpData = await Otp.findOne({ email });
			if (!otpData) {
				return res.status(400).send({ success: false, msg: "Try Again..." });
			}
			if (otpData.code === parseInt(code)) {
				if (otpData.expiresIn < new Date().getTime()) {
					//* if OTP is expired
					return res.status(400).send({ success: false, msg: "Your OTP has timed out and is no longer valid" });
				}
				//* set verified to true
				otpData.verified = true;
				await otpData.save();
				return res.status(200).send({ success: true, msg: "Verified Successfully!" });
			} else {
				return res.status(400).send({ success: false, msg: "The OTP you entered is invalid..!" });
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
