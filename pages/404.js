import Link from "next/link";

export default function Error() {
	return (
		<>
			<div className="text-center flex flex-1 flex-col w-full h-full justify-center bg-gray-100 py-20">
				<h1 className="mb-4 md:text-8xl text-6xl font-semibold text-red-500">404</h1>
				<p className="mb-4 md:text-3xl text-xl text-gray-600">Oops! Looks like you&apos;re lost.</p>
				<div className="animate-bounce">
					<svg className="mx-auto md:h-24 w-16 md:w-24 h-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
					</svg>
				</div>
				<p className="mt-4 font-medium md:text-xl text-lg text-gray-600">
					Let&apos;s get you back{" "}
					<Link href="/" className="text-primary-dark underline">
						Home
					</Link>
				</p>
			</div>
		</>
	);
}
