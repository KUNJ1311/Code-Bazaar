import React, { useEffect, useState } from "react";
const words = ["T-Shirts", "Hoodies", "Mugs", "Stickers"];
const Typing = () => {
	const [wordIndex, setWordIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [typing, setTyping] = useState(true);
	const [timeoutActive, setTimeoutActive] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			if (typing) {
				if (subIndex < words[wordIndex].length) {
					setSubIndex((prev) => prev + 1);
				} else {
					if (!timeoutActive) {
						// Check if timeout is active
						setTimeoutActive(true); // Set timeout flag
						setTimeout(() => {
							setTyping(false);
							setTimeoutActive(false); // Reset timeout flag
						}, 2500);
					}
				}
			} else {
				if (subIndex > 0) {
					setSubIndex((prev) => prev - 1);
				} else {
					setTyping(true);
					setWordIndex((prev) => (prev + 1) % words.length);
				}
			}
		}, 200);

		return () => clearInterval(interval);
	}, [subIndex, wordIndex, typing, timeoutActive]); // Include timeoutActive as a dependency

	useEffect(() => {
		const blinkInterval = setInterval(() => {
			setBlink((prev) => !prev);
		}, 600);

		return () => clearInterval(blinkInterval);
	}, [wordIndex]);
	return (
		<span>
			{`${words[wordIndex].substring(0, subIndex)}`}
			<span className="font-normal">{`${blink ? "|" : " "}`}</span>
		</span>
	);
};

export default Typing;
