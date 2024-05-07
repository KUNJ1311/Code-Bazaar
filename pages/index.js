import Head from "next/head";
import Hero from "@/components/Home/Hero";
import Content from "@/components/Home/Content";

export default function Home() {
	return (
		<>
			<Head>
				<title>CodeBazaar - Wear the code</title>
				<meta name="description" content="CodeBazaar - Wear the code" />
			</Head>
			<Hero />
			<div className="mx-auto lg:container w-full">
				<Content />
			</div>
		</>
	);
}
