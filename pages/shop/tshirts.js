import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Head from "next/head";
import Pagination from "@/components/Shop/Pagination";

const Tshirts = (props) => {
	return (
		<>
			<Head>
				<title>T-Shirts - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			<Products title={"T-Shirts"} products={props.products} />
			{props.totalPages > 0 && <Pagination totalPages={props.totalPages} category={"/shop/tshirts"} />}
		</>
	);
};

export async function getServerSideProps(context) {
	try {
		if (!mongoose.connections[0].readyState) {
			await mongoose.connect(process.env.MONGO_URI);
		}

		let { page } = context.query;
		if (!page || page < 1) {
			page = 1;
		}
		const limit = 15;
		const totalProductsCount = await Product.aggregate([{ $match: { category: "tshirt" } }, { $group: { _id: "$title" } }, { $count: "count" }]);
		if (totalProductsCount.length === 0) {
			return {
				props: { products: {}, totalPages: 0 },
			};
		}
		const totalPages = Math.ceil(totalProductsCount[0].count / limit);
		if (page > totalPages) {
			page = 1;
		}
		const skip = (page - 1) * limit;

		const products = await Product.aggregate([{ $match: { category: "tshirt" } }, { $group: { _id: "$title", doc: { $first: "$$ROOT" } } }, { $skip: skip }, { $limit: limit }]);

		let tshirts = {};
		products.forEach((item) => {
			const product = item.doc;
			tshirts[product.title] = {
				title: product.title,
				slug: product.slug,
				img: product.img,
				category: product.category,
				price: product.price,
				rating: product.rating,
			};
		});
		return {
			props: { products: tshirts, totalPages },
		};
	} catch (error) {
		console.error("Error fetching products:", error);
		return {
			props: { products: {}, totalPages: 0 },
		};
	}
}
export default Tshirts;
