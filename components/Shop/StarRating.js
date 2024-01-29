import React from "react";

const StarRating = ({ rating, Code }) => {
	const filledStars = Math.floor(rating);
	const percentFilled = (rating % 1) * 100;

	const renderStars = () => {
		const stars = [];

		for (let i = 1; i <= 5; i++) {
			const gradientStops = [];

			if (i < filledStars) {
				// Completely filled star
				gradientStops.push(<stop key={`${i}${Code}1`} offset="0%" stopColor="#088178" />, <stop key={`${i}${Code}2`} offset="100%" stopColor="#088178" />);
			} else if (i === filledStars) {
				// Partially filled star
				gradientStops.push(<stop key={`${i}${Code}1`} offset={`${percentFilled}%`} stopColor="#088178" />, <stop key={`${i}${Code}2`} offset={`${percentFilled}%`} stopColor="#fff" />, <stop key={`${i}${Code}3`} offset="100%" stopColor="#fff" />);
			} else {
				// Unfilled star
				gradientStops.push(<stop key={`${i}${Code}1`} offset="0%" stopColor="#fff" />, <stop key={`${i}${Code}2`} offset="100%" stopColor="#fff" />);
			}

			stars.push(
				<div key={i} className={`sm:w-5 w-4 sm:h-5 h-4 flex text-primary relative`}>
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18px" height="18px" viewBox="0 0 24 24">
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
		<span className="flex items-center">
			{renderStars()}
			<span className="text-gray-600 ml-3">{rating}</span>
		</span>
	);
};
export default StarRating;
