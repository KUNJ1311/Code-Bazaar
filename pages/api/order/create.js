import Razorpay from "razorpay";
import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import Order from "@/models/Order";

const instance = new Razorpay({
	key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
	key_secret: process.env.RAZORPAY_API_SECRET,
});

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const data = JSON.parse(req.body);
			//TODO: check if the cart is tampered

			//TODO: check if the cart items are out of stock

			//TODO: check details are valid

			const user = await User.findOne({ email: data.email });
			if (!user) {
				return res.status(401).json({ error: "User not found" });
			}

			const totalAmount = Number(data.amount);
			const amount = totalAmount * 100;
			const options = {
				amount: amount.toString(),
				currency: "INR",
			};

			const order = await instance.orders.create(options);
			await Order.create({
				order_id: order.id,
				user: user._id,
				products: data.cart,
				address: data.address,
				phone: data.phone,
				amount: String(Number(amount) / 100),
				hasPaid: false,
			});

			return res.status(200).json({ success: true, order });
		} catch (error) {
			return res.status(400).json({ msg: "Try Again", error: error });
		}
	} else {
		return res.status(405).json({ success: false, error: "This method is not allowed" });
	}
};

export default connectDb(handler);
