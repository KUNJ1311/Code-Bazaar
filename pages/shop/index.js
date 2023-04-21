import Link from "next/link";
import React from "react";
const index = () => {
	return (
		<div>
			Shop <Link href={"/shop/mugs"}>mugs</Link>
		</div>
	);
};

export default index;
