import { addQuantity, removeItem, saveCart, subtractQuantity } from "@/lib/actions/cartAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";

const CartList = ({ toggleCart }) => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector((state) => state.cart);
	const handleIncrement = (slug) => {
		dispatch(addQuantity(slug));
		dispatch(saveCart());
	};

	const handleDecrement = (slug) => {
		dispatch(subtractQuantity(slug));
		dispatch(saveCart());
	};

	const handleRemove = (slug) => {
		dispatch(removeItem(slug));
		dispatch(saveCart());
	};
	return (
		<div className="flow-root">
			<ul role="list" className="divide-y divide-gray-200">
				{cart?.map((product) => (
					<li key={product.slug} className="flex py-3">
						<div className="relative h-[102px] w-[85px] cart-img-small sm:h-[115px] sm:w-24 lg:w-32 lg:h-[153px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
							<img src={product.img} alt={product.title} className="h-full w-full object-cover object-center" />
							{product.availableQty < product.qty && (
								<p className="absolute top-0 left-0 w-full h-full opacity-70 flex items-center justify-center bg-gray-50 ">
									<span className="-rotate-45 text-red-500 opacity-100 md:font-semibold font-medium lg:text-lg sm:text-sm text-[10px]">Out of stock</span>
								</p>
							)}
						</div>

						<div className="ml-4 flex flex-1 flex-col">
							<div>
								<div className="flex justify-between text-xs sm:text-sm md:text-base font-medium text-gray-900">
									<h3>
										<Link href={`/product/${product.slug}`} onClick={toggleCart} className="hover:text-primary multi-line-ellipsis">
											{product.title}
										</Link>
									</h3>
									{product.availableQty >= product.qty && (
										<p className="ml-4">
											<span className="font-sans">₹</span>
											{product.price}
										</p>
									)}
								</div>
								<p className="mt-1 md:text-sm text-gray-500 text-xs font-medium">
									{product.size} - {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
								</p>
							</div>
							<div className="flex flex-1 items-end justify-between text-xs md:text-sm mt-2">
								<form className="max-w-xs mr-auto">
									<label htmlFor={`quantity-input-${product.slug}`} className="block mb-1 text-xs md:text-sm font-medium text-gray-600">
										Quantity:
									</label>
									<div className="relative flex items-center max-w-[7rem] h-7">
										<button type="button" onClick={() => handleDecrement(product.slug)} className={`flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-7 ${product.qty === 1 ? "cursor-not-allowed" : ""}`} disabled={product.qty === 1}>
											<svg className="w-2 h-2 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
											</svg>
										</button>
										<input id={`quantity-input-${product.slug}`} value={product.qty} className={`bg-gray-50 border border-x-0 border-gray-300 h-7 text-center text-gray-900 text-sm block w-full py-3 focus:outline-none cursor-default ${product.qty === product.availableQty ? "cursor-not-allowed" : ""}`} readOnly />
										<button type="button" onClick={() => handleIncrement(product.slug)} className={`flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-7 ${product.qty >= product.availableQty ? "cursor-not-allowed" : ""}`} disabled={product.qty >= product.availableQty}>
											<svg className="w-2 h-2 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
											</svg>
										</button>
									</div>
								</form>
								<div className="flex mb-1">
									<button
										type="button"
										className="text-xl md:text-2xl text-primary hover:text-red-500"
										onClick={() => {
											handleRemove(product.slug);
										}}
									>
										<HiOutlineTrash />
									</button>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CartList;
