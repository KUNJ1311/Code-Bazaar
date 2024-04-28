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
			{props.totalPages > 0 && <Pagination totalPages={props.totalPages} category={"tshirts"} />}
		</>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}

	let { page } = context.query;
	if (!page || page < 1) {
		page = 1;
	}
	const limit = 20;
	const totalProductsCount = await Product.countDocuments({ category: "tshirt" });
	const totalPages = Math.ceil(totalProductsCount / limit);
	if (page > totalPages) {
		page = 1;
	}
	const skip = (page - 1) * limit;

	let products = await Product.find({ category: "tshirt" }).skip(skip).limit(limit);

	let tshirts = {};
	for (let item of products) {
		if (item.title in tshirts) {
			if (!tshirts[item.title].color.includes(item.color)) {
				tshirts[item.title].color.push(item.color);
				tshirts[item.title].colorCode.push(item.colorCode);
			}
			if (!tshirts[item.title].size.includes(item.size)) {
				tshirts[item.title].size.push(item.size);
			}
		} else {
			tshirts[item.title] = JSON.parse(JSON.stringify(item));
			tshirts[item.title].color = [item.color];
			tshirts[item.title].size = [item.size];
			tshirts[item.title].colorCode = [item.colorCode];
		}
	}
	return {
		props: { products: tshirts, totalPages },
	};
}

export default Tshirts;
