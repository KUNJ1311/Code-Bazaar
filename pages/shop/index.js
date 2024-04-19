import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Head from "next/head";

const index = () => {
	return (
		<>
			<Head>
				<title>Shop - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			{/* // TODO: ADD Popular products or change design like amazon using grid */}
			<Products title={"Popular Products (todo: make design)"} products={""} />
		</>
	);
};

export default index;
