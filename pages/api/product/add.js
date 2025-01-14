import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
	if (req.method == "POST") {
		try {
			for (let i = 0; i < req.body.length; i++) {
				let p = new Product({
					title: req.body[i].title,
					slug: req.body[i].slug,
					desc: req.body[i].desc,
					img: req.body[i].img,
					category: req.body[i].category,
					size: req.body[i].size,
					color: req.body[i].color,
					price: req.body[i].price,
					availableQty: req.body[i].availableQty,
					rating: req.body[i].rating || 5.0,
					colorCode: req.body[i].colorCode,
				});
				await p.save();
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
