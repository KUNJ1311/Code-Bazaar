import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const decoded = jwt.verify(JSON.parse(req.body).token, process.env.JWT_SECRET);
			const { email, name, phone, address, pincode } = await User.findById({ _id: decoded._id });
			return res.status(200).json({ success: true, email, name, phone, address, pincode });
		} catch (e) {
			return res.status(401).json({ success: false, msg: "Unauthorized" });
		}
	} else {
		return res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
