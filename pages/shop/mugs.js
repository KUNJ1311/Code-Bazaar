import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Product from "@/models/Product";
import mongoose from "mongoose";

const Mugs = (props) => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Mugs"} products={props.products} />
		</>
	);
};

export async function getServerSideProps(context) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect(process.env.MONGO_URI);
	}
	let products = await Product.find({ category: "mug" });
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
		props: { products: mugs },
	};
}

export default Mugs;
