const FormatDateTime = (time) => {
	const date = new Date(time);
	const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
	const formattedDateTime = date.toLocaleDateString("en-US", options);
	return formattedDateTime;
};

export default FormatDateTime;
