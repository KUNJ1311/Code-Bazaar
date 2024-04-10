import crypto from "crypto";
import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";

const handler = async (req, res) => {
	if (req.method == "POST") {
		const data = await req.body;
		const { razorpay_order_id, razorpay_signature, razorpay_payment_id } = JSON.parse(data);

		const body = razorpay_order_id + "|" + razorpay_payment_id;

		const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex");

		const isAuthentic = expectedSignature === razorpay_signature;
		if (isAuthentic) {
			await Order.findOneAndUpdate({ order_id: razorpay_order_id }, { signature: razorpay_signature, payment_id: razorpay_payment_id, hasPaid: true });
			return res.status(200).json({ success: true, msg: "Payment Done" });
		} else {
			return res.status(400).json({ message: "invalid payment signature", error: true });
		}
	} else {
		return res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
