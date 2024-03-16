import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Tshirts = (props) => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Tshirts"} products={props.products} />
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
			if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
				tshirts[item.title].color.push(item.color);
			}
			if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
				tshirts[item.title].size.push(item.size);
			}
		} else {
			tshirts[item.title] = JSON.parse(JSON.stringify(item));
			if (item.availableQty > 0) {
				tshirts[item.title].color = [item.color];
				tshirts[item.title].size = [item.size];
			}
		}
	}
	return {
		props: { products: tshirts },
	};
}

export default Tshirts;
