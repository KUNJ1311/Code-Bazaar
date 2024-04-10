import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			for (let i = 0; i < req.body.length; i++) {
				await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
			}
			return res.status(200).json({ success: "success" });
		} catch (error) {
			return res.status(400).json(error);
		}
	} else {
		return res.status(405).json({ error: "This method is not allowed" });
	}
};

export default connectDb(handler);
