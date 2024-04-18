import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import pincodes from "@/pincodes.json";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const { token, address, pincode } = req.body;

			//* check details are valid
			const numberRegex = /^\d+$/;
			if (pincode.length !== 6 || !numberRegex.test(pincode)) {
				return res.status(200).json({ success: false, msg: "Please enter your 6 digit PIN Code." });
			}

			//* check pincode is serviceable
			if (!Object.keys(pincodes).includes(pincode)) {
				return res.status(200).json({ success: false, msg: "This pincode you have entered is not serviceable." });
			}

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			await User.findByIdAndUpdate({ _id: decoded._id }, { address: address, pincode: pincode });
			return res.status(201).json({ success: true, msg: "Data updated successfully" });
		} catch (error) {
			return res.status(401).json({ success: false, msg: "Try Again...", error: error });
		}
	} else {
		return res.status(405).json({ success: false, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
