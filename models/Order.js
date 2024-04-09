import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		razorpay_payment_id: {
			type: String,
			required: true,
		},
		razorpay_order_id: {
			type: String,
			required: true,
		},
		razorpay_signature: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [{ productId: { type: String }, quantity: { type: Number, default: 1 } }],
		address: { type: String, requied: true },
		amount: { type: Number, requied: true },
		status: { type: String, default: "Pending", requied: true },
		hasPaid: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
