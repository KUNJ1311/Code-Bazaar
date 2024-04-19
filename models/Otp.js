import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	code: {
		type: Number,
		required: true,
	},
	verified: {
		type: Boolean,
		required: true,
	},
	expiresIn: {
		type: Date,
		required: true,
	},
});

export default mongoose.models.Otp || mongoose.model("Otp", OtpSchema);
