import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/components/StoreProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</StoreProvider>
	);
}
