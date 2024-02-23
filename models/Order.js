import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		products: [{ productId: { type: String }, quantity: { type: Number, default: 1 } }],
		address: { type: String, requied: true },
		amount: { type: Number, requied: true },
		status: { type: Number, default: "Pending", requied: true },
	},
	{ timesstamps: true }
);

mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
