import Razorpay from "razorpay";
import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import Order from "@/models/Order";
import Product from "@/models/Product";
import pincodes from "@/pincodes.json";

const instance = new Razorpay({
	key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
	key_secret: process.env.RAZORPAY_API_SECRET,
});

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const data = JSON.parse(req.body);
			if (data.amount <= 0) {
				return res.status(422).json({ error: true, msg: "The price of some items in your cart have changed." });
			}

			let sum = 0;
			for (let item of data.cart) {
				let product = await Product.findOne({ slug: item.slug });

				//* check if the cart items are out of stock
				if (product.availableQty < item.qty) {
					return res.status(200).json({ error: true, msg: "Some items in your cart went out of stock." });
				}

				//* check if the cart is tampered
				sum += item.price * item.qty;
				if (product.price !== item.price) {
					return res.status(422).json({ error: true, msg: "The price of some items in your cart have changed." });
				}
			}

			//* check if the cart is tampered
			if (sum !== data.amount) {
				return res.status(422).json({ error: true, msg: "The price of some items in your cart have changed." });
			}

			//* check details are valid
			const numberRegex = /^\d+$/;
			if (data.phone.length !== 10 || !numberRegex.test(data.phone)) {
				return res.status(200).json({ error: true, msg: "Please enter your 10 digit phone number." });
			}

			if (data.pincode.length !== 6 || !numberRegex.test(data.pincode)) {
				return res.status(200).json({ error: true, msg: "Please enter your 6 digit PIN Code." });
			}

			//* check pincode is serviceable
			if (!Object.keys(pincodes).includes(data.pincode)) {
				return res.status(200).json({ error: true, msg: "This pincode you have entered is not serviceable." });
			}

			const user = await User.findOne({ email: data.email });
			if (!user) {
				return res.status(401).json({ error: true, msg: "User not found. Enter valid email." });
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
				name: data.name,
				address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}.`,
				phone: data.phone,
				amount: String(Number(amount) / 100),
				hasPaid: false,
			});

			return res.status(201).json({ success: true, order });
		} catch (error) {
			return res.status(400).json({ msg: "Try Again", error: error });
		}
	} else {
		return res.status(405).json({ error: true, msg: "This method is not allowed" });
	}
};

export default connectDb(handler);
