import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/components/StoreProvider";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
	return (
		<StoreProvider>
			<ToastContainer position="top-center" limit={5} autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</StoreProvider>
	);
}
