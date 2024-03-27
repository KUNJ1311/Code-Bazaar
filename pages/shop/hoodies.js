import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Hoodies = (props) => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Hoodies"} products={props.products} />
		</>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let products = await Product.find({ category: "hoodie" });
	let hoodies = {};
	for (let item of products) {
		if (item.title in hoodies) {
			if (!hoodies[item.title].color.includes(item.color) && item.availableQty > 0) {
				hoodies[item.title].color.push(item.color);
				hoodies[item.title].colorCode.push(item.colorCode);
			}
			if (!hoodies[item.title].size.includes(item.size) && item.availableQty > 0) {
				hoodies[item.title].size.push(item.size);
			}
		} else {
			hoodies[item.title] = JSON.parse(JSON.stringify(item));
			if (item.availableQty > 0) {
				hoodies[item.title].color = [item.color];
				hoodies[item.title].size = [item.size];
				hoodies[item.title].colorCode = [item.colorCode];
			}
		}
	}
	return {
		props: { products: hoodies },
	};
}

export default Hoodies;
