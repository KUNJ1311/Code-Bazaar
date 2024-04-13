const FormatDateTime = (time) => {
	const date = new Date(time);

	// Format date
	const dateFormatOptions = { month: "short", day: "2-digit", year: "numeric" };
	const formattedDate = date.toLocaleDateString("en-US", dateFormatOptions);

	// Format time
	const timeFormatOptions = { hour: "numeric", minute: "numeric", hour12: true };
	const formattedTime = date.toLocaleTimeString("en-US", timeFormatOptions);

	return { formattedDate, formattedTime };
};

export default FormatDateTime;
