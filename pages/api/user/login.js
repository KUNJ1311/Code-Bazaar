import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			let user = await User.findOne({ email: req.body.email });
			const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
			const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
			if (user) {
				if (req.body.email === user.email && req.body.password === decryptedPass) {
					const token = jwt.sign({ _id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET);
					return res.status(200).json({ success: true, token });
				} else {
					return res.status(401).json({ success: false, msg: "Invalid Credentials" });
				}
			}
		} catch (error) {
			return res.status(401).json({ success: false, msg: "User Not Found", error: error });
		}
	} else {
		return res.status(405).json({ success: false, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
