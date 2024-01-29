import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/components/StoreProvider";
import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Navbar />
			<div className="font-spartan">
				<Component {...pageProps} />
			</div>
			<Footer />
		</StoreProvider>
	);
}
