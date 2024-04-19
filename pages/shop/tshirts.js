import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Head from "next/head";

const Tshirts = (props) => {
	return (
		<>
			<Head>
				<title>T-Shirts - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			<Products title={"T-Shirts"} products={props.products} />
		</>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let products = await Product.find({ category: "tshirt" });
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
		props: { products: tshirts },
	};
}

export default Tshirts;
