import crypto from "crypto";
import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import User from "@/models/User";

const handler = async (req, res) => {
	if (req.method == "POST") {
		const data = await req.body;
		const { razorpay_order_id, razorpay_signature, razorpay_payment_id, email, amount } = JSON.parse(data);
		const body = razorpay_order_id + "|" + razorpay_payment_id;

		const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex");

		const isAuthentic = expectedSignature === razorpay_signature;
		if (!isAuthentic) {
			return res.status(400).json({ message: "invalid payment signature", error: true });
		}
		const user = await User.findOne({ email });
		if (user) {
			await Order.create({
				razorpay_payment_id,
				razorpay_order_id,
				razorpay_signature,
				user: user._id,
				products: [{ productId: "13fdsf23fd", quantity: 23 }],
				address: "d-1/402, swatick",
				amount: String(Number(amount) / 100),
				status: "Pending",
				hasPaid: true,
			});
		} else {
			res.status(401).json({ success: false, msg: "user not found" });
		}
		return res.status(200).json({ success: true, msg: "Payment Done" });
	} else {
		res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
