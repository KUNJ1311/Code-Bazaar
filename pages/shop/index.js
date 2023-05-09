import Featured from "@/components/Products";
import SubNavbar from "@/components/Shop/ProductCarousel";
import React from "react";
const index = () => {
	return (
		<>
			<SubNavbar />
			<Featured title={"Popular Products"} />
		</>
	);
};

export default index;
