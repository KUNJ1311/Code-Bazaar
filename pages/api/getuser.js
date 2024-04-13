import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const decoded = jwt.verify(JSON.parse(req.body).token, process.env.JWT_SECRET);
			return res.status(200).json({ success: true, email: decoded.email, name: decoded.name });
		} catch (e) {
			return res.status(401).json({ success: false, msg: "Unauthorized" });
		}
	} else {
		return res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
