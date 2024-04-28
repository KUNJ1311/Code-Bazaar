import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ totalPages, category }) => {
	const router = useRouter();
	let { page } = router.query;
	page = parseInt(page);
	const active = `relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm`;
	const normal = `relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`;
	return (
		<>
			{totalPages <= 5 ? (
				<div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
					<div className="flex flex-1 justify-between">
						<Link href={`/shop/${category}?page=${page - 1}`}>
							<button type="button" disabled={page <= 1 ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
								Previous
							</button>
						</Link>
						<Link href={`/shop/${category}?page=${page + 1}`}>
							<button type="button" disabled={page >= totalPages ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
								Next
							</button>
						</Link>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
					<div className="flex flex-1 justify-between sm:hidden">
						<Link href={`/shop/${category}?page=${page - 1}`}>
							<button type="button" disabled={page <= 1 ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
								Previous
							</button>
						</Link>
						<Link href={`/shop/${category}?page=${page + 1}`}>
							<button type="button" disabled={page >= totalPages ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
								Next
							</button>
						</Link>
					</div>
					<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
						<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
							<Link href={`/shop/${category}?page=${page - 1}`}>
								<button type="button" disabled={page <= 1 ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
									<span className="sr-only">Previous</span>
									<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
									</svg>
								</button>
							</Link>
							{page < 3 &&
								[0, 1, 2].map((num) => (
									<Link key={num + 1} href={`/shop/${category}?page=${num + 1}`} className={`${page === num + 1 ? active : normal}`}>
										{num + 1}
									</Link>
								))}
							{page >= 3 && (
								<>
									{[0, 1].map((num) => (
										<Link key={num + 1} href={`/shop/${category}?page=${num + 1}`} className={`${page === num + 1 ? active : normal}`}>
											{num + 1}
										</Link>
									))}
									<span className="relative cursor-not-allowed inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
								</>
							)}
							{page >= 3 && page <= totalPages - 2 && (
								<>
									{page - 2 !== 1 && page - 2 !== 2 && (
										<Link key={page - 2} href={`/shop/${category}?page=${page - 2}`} className={`${page === page - 2 ? active : normal}`}>
											{page - 2}
										</Link>
									)}
									{page - 1 !== 2 && (
										<Link key={page - 1} href={`/shop/${category}?page=${page - 1}`} className={`${page === page - 1 ? active : normal}`}>
											{page - 1}
										</Link>
									)}
									{
										<Link key={page} href={`/shop/${category}?page=${page}`} className={`${page === page ? active : normal}`}>
											{page}
										</Link>
									}
									{page + 1 !== totalPages - 1 && (
										<Link key={page + 1} href={`/shop/${category}?page=${page + 1}`} className={`${page === page + 1 ? active : normal}`}>
											{page + 1}
										</Link>
									)}
									{page + 2 !== totalPages && page + 2 !== totalPages - 1 && (
										<Link key={page + 2} href={`/shop/${category}?page=${page + 2}`} className={`${page === page + 2 ? active : normal}`}>
											{page + 2}
										</Link>
									)}
								</>
							)}

							{page <= totalPages - 2 && (
								<>
									<span className="relative cursor-not-allowed inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
									{[1, 0].map((num) => (
										<Link key={totalPages - num} href={`/shop/${category}?page=${totalPages - num}`} className={`${page === totalPages - num ? active : normal}`}>
											{totalPages - num}
										</Link>
									))}
								</>
							)}
							{page > totalPages - 2 &&
								[2, 1, 0].map((num) => (
									<Link key={totalPages - num} href={`/shop/${category}?page=${totalPages - num}`} className={`${page === totalPages - num ? active : normal}`}>
										{totalPages - num}
									</Link>
								))}
							<Link href={`/shop/${category}?page=${page + 1}`}>
								<button type="button" disabled={page >= totalPages ? true : false} className="disabled:opacity-60 relative disabled:cursor-not-allowed inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
									<span className="sr-only">Next</span>
									<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
									</svg>
								</button>
							</Link>
						</nav>
					</div>
				</div>
			)}
		</>
	);
};

export default Pagination;
