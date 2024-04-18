import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { Store } from "@/lib/store";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import Script from "next/script";

export default function App({ Component, pageProps }) {
	const store = Store();

	return (
		<Provider store={store}>
			<ToastContainer position="top-center" limit={3} autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			<ProgressBar height="3px" color="#25756d" startPosition={0.3} options={{ showSpinner: false }} shallowRouting />
			<div className="flex flex-col min-h-full font-poppins">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
			<Script src="https://checkout.razorpay.com/v1/checkout.js" />
		</Provider>
	);
}
