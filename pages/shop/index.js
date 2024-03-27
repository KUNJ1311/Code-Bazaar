import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import React from "react";
const index = () => {
	return (
		<>
			<ProductCarousel />
			{/* // TODO: ADD Popular products or change design like amazon using grid */}
			<Products title={"Popular Products (todo: make design)"} products={""} />
		</>
	);
};

export default index;
