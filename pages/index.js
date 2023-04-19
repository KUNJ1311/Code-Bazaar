import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>CodeBazaar - Wear the code</title>
				<meta name="description" content="CodeBazaar - Wear the code" />
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Navbar />

			<Footer />
		</div>
	);
}
