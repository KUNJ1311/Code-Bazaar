import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const { token, oldpassword, newpassword } = req.body;

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const user = await User.findById({ _id: decoded._id });
			if (!user) {
				return res.status(200).json({ success: false, msg: "User not found" });
			}
			const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
			const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
			if (oldpassword === decryptedPass) {
				await User.findByIdAndUpdate({ _id: decoded._id }, { password: CryptoJS.AES.encrypt(newpassword, process.env.AES_SECRET).toString() });
				return res.status(201).json({ success: true, msg: "Password changed successfully" });
			} else {
				return res.status(200).json({ success: false, msg: "Wrong Password" });
			}
		} catch (error) {
			console.log(error);
			return res.status(401).json({ success: false, msg: "Try Again..." });
		}
	} else {
		return res.status(405).json({ msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
