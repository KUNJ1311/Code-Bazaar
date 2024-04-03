import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "@/lib/store";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
	const store = Store();
	const router = useRouter();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		router.events.on("routeChangeStart", () => {
			setProgress(40);
		});
		router.events.on("routeChangeComplete", () => {
			setProgress(100);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query]);

	return (
		<Provider store={store}>
			<ToastContainer position="top-center" limit={3} autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			<LoadingBar color="#25756d" height={3} waitingTime={500} progress={progress} onLoaderFinished={() => setProgress(0)} />
			<div className="h-full w-full flex flex-col">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</Provider>
	);
}
