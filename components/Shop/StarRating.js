import React from "react";

const StarRating = ({ rating, Code }) => {
	const filledStars = Math.floor(rating);
	const percentFilled = (rating % 1) * 100;

	const getColorClass = () => {
		if (rating >= 4) {
			return "text-primary";
		} else if (rating >= 2) {
			return "text-amber-500";
		} else {
			return "text-red-600";
		}
	};
	const renderStars = () => {
		const stars = [];

		for (let i = 1; i <= 5; i++) {
			const gradientStops = [];

			if (i < filledStars) {
				gradientStops.push(<stop key={`${i}${Code}1`} offset="0%" stopColor="#088178" />, <stop key={`${i}${Code}2`} offset="100%" stopColor="#088178" />);
			} else if (i === filledStars) {
				gradientStops.push(<stop key={`${i}${Code}1`} offset={`${percentFilled}%`} stopColor="#088178" />, <stop key={`${i}${Code}2`} offset={`${percentFilled}%`} stopColor="#fff" />, <stop key={`${i}${Code}3`} offset="100%" stopColor="#fff" />);
			} else {
				gradientStops.push(<stop key={`${i}${Code}1`} offset="0%" stopColor="#fff" />, <stop key={`${i}${Code}2`} offset="100%" stopColor="#fff" />);
			}

			stars.push(
				<div key={i} className={`w-4 h-5 flex text-primary items-center justify-center`}>
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-5" viewBox="0 3 24 24">
						<defs>
							<linearGradient id={`starGradient${i}${Code}`}>{gradientStops}</linearGradient>
						</defs>
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#starGradient${i}${Code})`} />
					</svg>
				</div>
			);
		}

		return stars;
	};

	return (
		<>
			<div className={`flex mr-1 w-6 h-4 items-center font-medium sm:text-base text-sm ${getColorClass()}`}>
				<span>{rating}</span>
			</div>
			{renderStars()}
		</>
	);
};
export default StarRating;
