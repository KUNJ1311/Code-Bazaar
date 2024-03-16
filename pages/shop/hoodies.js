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
	return {
		props: { products: JSON.parse(JSON.stringify(products)) },
	};
}

export default Hoodies;
