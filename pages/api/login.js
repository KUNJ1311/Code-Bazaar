import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
	if (req.method == "POST") {
		let user = await User.findOne({ email: req.body.email });
		const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
		const decryptedPass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)).toString();
		if (user) {
			if (req.body.email === user.email && req.body.password === decryptedPass) {
				res.status(200).json({ success: true, email: user.email, name: user.name });
			} else {
				res.status(401).json({ success: false, error: "Invalid Credentials" });
			}
		} else {
			res.status(401).json({ success: false, error: "User Not Found" });
		}
	} else {
		res.status(405).json({ error: "This method is not allowed" });
	}
};

export default connectDb(handler);
