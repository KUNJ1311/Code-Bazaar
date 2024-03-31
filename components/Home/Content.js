import { IoShirtOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

const Content = () => {
	return (
		<section className="text-gray-600 body-font px-9">
			<div className="container px-5 py-14 mx-auto ">
				<div className="flex flex-wrap justify-center -m-4 ">
					<div className="w-full xl:w-1/3 md:w-1/2 p-4 ">
						<div className=" border border-gray-200 px-3 py-5 rounded-lg items-center justify-center flex  flex-col min-h-[200px]">
							<div className="w-12 border border-gray-300 h-12 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
								<IoShirtOutline className="text-3xl" />
							</div>
							<h2 className="text-xl text-gray-900 font-medium title-font mb-2">Premium Clothes</h2>
							<p className="leading-relaxed text-lg">Our Clothes are 100% made of cotton.</p>
						</div>
					</div>
					<div className="w-full xl:w-1/3 md:w-1/2 p-4 ">
						<div className=" border border-gray-200 px-3 py-5 rounded-lg  items-center justify-center flex flex-col min-h-[200px]">
							<div className="w-12 border border-gray-300 h-12 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
								<FaShippingFast className="text-3xl" />
							</div>
							<h2 className="text-xl text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
							<p className="leading-relaxed text-lg">We ship all over India for FREE.</p>
						</div>
					</div>
					<div className="w-full xl:w-1/3 md:w-1/2 p-4 ">
						<div className=" border border-gray-200 px-3 py-5 rounded-lg items-center justify-center flex  flex-col min-h-[200px]">
							<div className="w-12  border border-gray-300 h-12 inline-flex items-center justify-center rounded-full bg-primary-light text-primary mb-4">
								<CiDiscount1 className="text-3xl stroke-1" />
							</div>
							<h2 className="text-xl text-gray-900 font-medium title-font mb-2">Exciting Offers</h2>
							<p className="leading-relaxed text-lg">We provide amazing offers & discounts on our products.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
