import Head from "next/head";
import Hero from "@/components/Home/Hero";
import Content from "@/components/Home/Content";
import Featured from "@/components/Products";

export default function Home() {
	return (
		<div className="font-spartan">
			<Head>
				<title>CodeBazaar - Wear the code</title>
				<meta name="description" content="CodeBazaar - Wear the code" />
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Hero />
			<div className="mx-auto lg:container">
				<Content />
				<Featured title={"Featured Products"} />
			</div>
		</div>
	);
}
