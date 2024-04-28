import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Head from "next/head";
import Pagination from "@/components/Shop/Pagination";

const Mugs = (props) => {
	return (
		<>
			<Head>
				<title>Mugs - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			<Products title={"Mugs"} products={props.products} />
			{props.totalPages > 0 && <Pagination totalPages={props.totalPages} category={"mugs"} />}
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
	const totalProductsCount = await Product.countDocuments({ category: "mug" });
	const totalPages = Math.ceil(totalProductsCount / limit);
	if (page > totalPages) {
		page = 1;
	}
	const skip = (page - 1) * limit;

	let products = await Product.find({ category: "mug" }).skip(skip).limit(limit);

	let mugs = {};
	for (let item of products) {
		if (item.title in mugs) {
			if (!mugs[item.title].color.includes(item.color)) {
				mugs[item.title].color.push(item.color);
				mugs[item.title].colorCode.push(item.colorCode);
			}
			if (!mugs[item.title].size.includes(item.size)) {
				mugs[item.title].size.push(item.size);
			}
		} else {
			mugs[item.title] = JSON.parse(JSON.stringify(item));
			mugs[item.title].color = [item.color];
			mugs[item.title].size = [item.size];
			mugs[item.title].colorCode = [item.colorCode];
		}
	}
	return {
		props: { products: mugs, totalPages },
	};
}

export default Mugs;
