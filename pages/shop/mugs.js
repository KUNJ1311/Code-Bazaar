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
	return {
		props: { products: JSON.parse(JSON.stringify(products)) },
	};
}

export default Mugs;
