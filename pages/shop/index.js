import Featured from "@/components/Featured";
import SubNavbar from "@/components/Shop/SubNavbar";
import Link from "next/link";
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
