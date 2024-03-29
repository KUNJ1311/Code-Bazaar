import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		let user = await User.findOne({ email: req.body.email });
		if (user) {
			if (req.body.email === user.email && req.body.password === user.password) {
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
