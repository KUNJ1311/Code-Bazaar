import Products from "@/components/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";

import React from "react";

const Hoodies = () => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Hoodies"} />
		</>
	);
};

export default Hoodies;
