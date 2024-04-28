import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Head from "next/head";
import Pagination from "@/components/Shop/Pagination";

const Hoodies = (props) => {
	return (
		<>
			<Head>
				<title>Hoodies - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			<Products title={"Hoodies"} products={props.products} />
			{props.totalPages > 0 && <Pagination totalPages={props.totalPages} category={"hoodies"} />}
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
	const limit = 3;
	const totalProductsCount = await Product.countDocuments({ category: "hoodie" });
	const totalPages = Math.ceil(totalProductsCount / limit);
	if (page > totalPages) {
		page = 1;
	}
	const skip = (page - 1) * limit;

	let products = await Product.find({ category: "hoodie" }).skip(skip).limit(limit);

	let hoodies = {};
	for (let item of products) {
		if (item.title in hoodies) {
			if (!hoodies[item.title].color.includes(item.color)) {
				hoodies[item.title].color.push(item.color);
				hoodies[item.title].colorCode.push(item.colorCode);
			}
			if (!hoodies[item.title].size.includes(item.size)) {
				hoodies[item.title].size.push(item.size);
			}
		} else {
			hoodies[item.title] = JSON.parse(JSON.stringify(item));
			hoodies[item.title].color = [item.color];
			hoodies[item.title].size = [item.size];
			hoodies[item.title].colorCode = [item.colorCode];
		}
	}
	return {
		props: { products: hoodies, totalPages },
	};
}

export default Hoodies;
