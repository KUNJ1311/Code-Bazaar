import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { Store } from "@/lib/store";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import Script from "next/script";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Cart from "@/components/Shop/Cart";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
	const store = Store();
	const ref = useRef();
	const router = useRouter();
	const [active, setActive] = useState(0);

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			console.log("tra");
			setActive(2);
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			getPath();
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	//* Close login page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				hideCart();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const hideCart = () => {
		if (!ref.current.classList.contains("translate-x-full")) {
			getPath();
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	const getPath = () => {
		const pathname = router.pathname;
		if (pathname) {
			if (pathname === "/") {
				setActive(0);
			} else if (pathname.startsWith("/shop")) {
				setActive(1);
			} else if (pathname === "/account" || pathname === "/login" || pathname === "/signup") {
				setActive(3);
			} else {
				setActive();
			}
		}
	};

	useEffect(() => {
		getPath();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.pathname]);

	return (
		<Provider store={store}>
			<Head>
				<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0" />
				<link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST}/favicon.ico`} type="image/x-icon" />
			</Head>
			<ToastContainer position="top-center" limit={3} autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			<ProgressBar height="3px" color="#25756d" startPosition={0.3} options={{ showSpinner: false }} shallowRouting />
			<div className="flex relative flex-col min-h-full font-poppins">
				<Navbar toggleCart={toggleCart} active={active} hideCart={hideCart} />
				{/* Cart */}
				<div ref={ref} className="flex fixed z-50 w-screen max-h-full transition translate-x-full" onClick={hideCart}>
					<div className="flex justify-end w-full sm:mt-[69px] mt-[56px]">
						<Cart toggleCart={toggleCart} />
					</div>
				</div>
				<Component {...pageProps} />
				<Footer />
			</div>
			<Script src="https://checkout.razorpay.com/v1/checkout.js" />
		</Provider>
	);
}
