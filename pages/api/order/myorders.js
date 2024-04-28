import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const data = jwt.verify(req.body.token, process.env.JWT_SECRET);
			const orders = await Order.find({ user: data._id }).sort({ _id: -1 });
			return res.status(200).json({ orders });
		} catch (error) {
			return res.status(500).json({ error });
		}
	} else {
		return res.status(405).json({ error: "This method is not allowed" });
	}
};

export default connectDb(handler);
