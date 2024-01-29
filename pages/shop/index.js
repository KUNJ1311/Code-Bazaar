import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import React from "react";
const index = () => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Popular Products"} />
		</>
	);
};

export default index;
