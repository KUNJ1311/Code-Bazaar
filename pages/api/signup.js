import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			//* check the existing user
			const { name, email } = req.body;
			const existUsername = await User.findOne({ name });
			if (existUsername) {
				return res.status(400).json({ msg: "Sorry a user with this Username is already exists" });
			}
			//* check the existing email
			const existEmail = await User.findOne({ email });
			if (existEmail) {
				return res.status(400).json({ msg: "Sorry E-mail Id is already exists" });
			}
			//* register user
			let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString() });
			await u.save();
			res.status(201).json({ success: true });
		} catch (error) {
			return res.status(401).json(error);
		}
	} else {
		res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
