import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { addUserData } from "@/lib/actions/userAction";
import { Provider } from "react-redux";
import { Store } from "@/lib/store";

export default function App({ Component, pageProps }) {
	const store = Store();

	return (
		<Provider store={store}>
			<ToastContainer position="top-center" limit={3} autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
