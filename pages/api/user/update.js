import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const { token, name, phone } = req.body;

			//* check details are valid
			const numberRegex = /^\d+$/;
			if (phone.length !== 10 || !numberRegex.test(phone)) {
				return res.status(200).json({ success: false, msg: "Please enter your 10 digit phone number." });
			}

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			await User.findByIdAndUpdate({ _id: decoded._id }, { name: name, phone: phone });
			const newToken = jwt.sign({ _id: decoded._id, email: decoded.email, name: name }, process.env.JWT_SECRET);
			return res.status(201).json({ success: true, token: newToken, msg: "Data updated successfully" });
		} catch (error) {
			return res.status(401).json({ success: false, msg: "Try Again...", error: error });
		}
	} else {
		return res.status(405).json({ success: false, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
