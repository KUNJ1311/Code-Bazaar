import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			const result = [];
			for (let i = 0; i < req.body.length; i++) {
				const product = await Product.findOne({
					slug: req.body[i].slug,
				});
				if (product) {
					result.push({
						...req.body[i],
						availableQty: product.availableQty,
					});
				}
			}
			return res.status(200).json({ success: true, data: result });
		} catch (error) {
			return res.status(400).json({ error, success: false });
		}
	} else {
		return res.status(405).json({ error: "This method is not allowed", success: false });
	}
};

export default connectDb(handler);
