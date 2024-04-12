export default function handler(req, res) {
	const pincodes = {
		380050: ["Ahmedabad", "Gujarat"],
		380008: ["Maninagar", "Gujarat"],
	};
	return res.status(200).json(pincodes);
}
