import Products from "@/components/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import React from "react";

const Tshirts = () => {
	return (
		<>
			<ProductCarousel />
			<Products title={"Tshirts"} />
		</>
	);
};

export default Tshirts;
