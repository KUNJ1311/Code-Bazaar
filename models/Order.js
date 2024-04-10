import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		order_id: {
			type: String,
			required: true,
		},
		payment_id: {
			type: String,
		},
		signature: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		phone: { type: String, required: true },
		products: { type: Object, required: true },
		address: { type: String, requied: true },
		amount: { type: Number, requied: true },
		hasPaid: { type: Boolean, default: false, required: true },
	},
	{ timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
