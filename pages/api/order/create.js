import Razorpay from "razorpay";
import connectDb from "@/middleware/mongoose";

const instance = new Razorpay({
	key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
	key_secret: process.env.RAZORPAY_API_SECRET,
});

const handler = async (req, res) => {
	if (req.method == "GET") {
		const totalAmount = Number(req.query.amount);

		const amount = totalAmount * 100;
		const options = {
			amount: amount.toString(),
			currency: "INR",
		};

		const order = await instance.orders.create(options);
		return res.status(200).json({ success: true, order });
	} else {
		res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
